/* eslint-disable react/prop-types,react/forbid-prop-types,
react/require-default-props,react/default-props-match-prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styled from './Dashboard.styled';
import Task from './task/Task';
import trash from '../../image/trash.svg';
import info from '../../image/information.svg';
import pushpin from '../../image/pushpin.svg';
import share from '../../image/share.svg';
import comment from '../../image/comment.svg';
import PopupContainer from '../popup/PopupContainer';
import Input from '../../components/input/Input';

export const getTaskList = (tasks, props) => (
    tasks.length === 0
        ? (
            <styled.NullLenghtTask>
                You have no tasks yet, it's time to be active!
            </styled.NullLenghtTask>
        )
        : tasks.map(i => (
            <Task
                idTask={i.id}
                idList={props.idList}
                selected={i.isComplete}
                nameTask={i.body}
                actions={props.actions}
                key={i.id}
            />
        )));

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            statePopup: false,
            stateComment: true,
            newTitle: props.title,
        };
    }

    changeValueNewTask = e => this.setState({
        valueNewTask: e.target.value,
    });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
        });
    };

    toggleComment = () => {
        this.setState({
            stateComment: !this.state.stateComment,
        });
    };

    showPopup = () => {
        this.setState({
            statePopup: true,
        });
    };

    closePopup = () => {
        this.setState({
            statePopup: false,
        });
    };

    handleUpdateTitle = (newValue) => {
        const { actions, idList } = this.props;
        const { newTitle } = this.state;
        this.setState({ newTitle: newValue });
        actions.updateTitleDashboard({
            id: idList, newTitle,
        });
    };

    handleUpdateTitleSuccess = () => {
        const { actions, idList } = this.props;
        const { newTitle } = this.state;
        actions.updateTitleSuccess({ id: idList, newTitle });
    };

    render() {
        const { valueNewTask, statePopup, stateComment } = this.state;
        const {
            idList, title, tasks, actions, shared, createdBy, createdDate, modifiedBy, modifiedDate, currentUser :
                { gravatarUrl },
        } = this.props;

        return ([
            <PopupContainer
                statePopup={statePopup}
                closePopup={this.closePopup}
                idList={idList}
                key="popup"
            />,
            <styled.Dashboard
                key={idList}
                id={idList}
            >
                <styled.DashboardHeader>
                    <styled.Avatar src={`${gravatarUrl}?s=120&d=retro`} />

                    <Input
                        onChange={this.handleUpdateTitle}
                        value={title}
                        onBlur={this.handleUpdateTitleSuccess}
                        border={false}
                        style={{
                            textDecoration: 'none', width: '100%', fontWeight: 'bold', marginLeft: '8px',
                        }}
                    />
                    {
                        shared
                            ? (
                                <styled.IconContainer>
                                    <styled.Icon src={pushpin} alt="List is shared" />
                                </styled.IconContainer>
                            )
                            : (
                                <styled.IconContainer>
                                    <Link to={`/lists/${idList}`}>
                                        <styled.IconInfo>
                                            <p>
                                                <b>Information:</b><br />
                                                Created by: {createdBy}<br />
                                                Created time: {new Date(createdDate).toLocaleString()}<br />
                                                Modyfied by: {modifiedBy}<br />
                                                Modyfied time: {new Date(modifiedDate).toLocaleString()}<br />
                                            </p>
                                            <styled.Icon
                                                src={info}
                                                alt="Information about this list"
                                            />
                                        </styled.IconInfo>
                                    </Link>
                                    <styled.Icon src={share} alt="Share list" onClick={this.showPopup} />
                                    <styled.Icon
                                        src={trash}
                                        onClick={() => actions.deleteDashboard({ id: idList })}
                                        alt="Delete this list"
                                    />
                                </styled.IconContainer>
                            )
                    }
                </styled.DashboardHeader>
                <styled.TaskList>
                    {getTaskList(tasks, this.props)}
                </styled.TaskList>
                {
                    shared ? ''
                        : (
                            <div style={{ display: 'flex' }}>
                                <styled.InputAddingTask
                                    placeholder="Add to-do"
                                    value={valueNewTask}
                                    onChange={this.changeValueNewTask}
                                    onKeyPress={e => valueNewTask
                                        && (e.key === 'Enter'
                                            && (e.target.blur(), actions.addTask({
                                                idDashboard: idList, nameTask: valueNewTask,
                                            })))
                                    }
                                    onBlur={this.handlerOnBlur}
                                />
                                <styled.Icon
                                    style={{ alignSelf: 'center' }}
                                    src={comment}
                                    alt="Information about this list"
                                    onClick={this.toggleComment}
                                />
                                
                            </div>

                        )
                }
                <styled.Expand
                    visible={stateComment}
                >
                    <styled.Textarea
                        placeholder="Enter your comment"
                    >
                        Some text
                    </styled.Textarea>
                </styled.Expand>
            </styled.Dashboard>,
        ]);
    }
}

Dashboard.propTypes = {
    tasks: PropTypes.array.isRequired,
    idList: PropTypes.number,
    title: PropTypes.string,
};

Dashboard.defaultProps = {
    tasks: [],
};
