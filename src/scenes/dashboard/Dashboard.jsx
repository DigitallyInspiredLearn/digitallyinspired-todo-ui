/* eslint-disable react/prop-types,react/forbid-prop-types,
react/require-default-props,react/default-props-match-prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as styled from './styled/Dashboard.styled';
import Task from './task/Task';
import trash from '../../image/trash.svg';
import info from '../../image/information.svg';
import pushpin from '../../image/pushpin.svg';
import share from '../../image/share.svg';
import PopupContainer from '../popup/PopupContainer';

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
                key={i.id}
                selected={i.isComplete}
                nameTask={i.body}
                actions={props.actions}
            />
        )));

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            statePopup: false,
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

    render() {
        const { valueNewTask, statePopup } = this.state;
        const {
            idList, title, tasks, actions, shared,
        } = this.props;

        return ([
            <PopupContainer
                statePopup={statePopup}
                closePopup={this.closePopup}
                idList={idList}
            />,
            <styled.Dashboard id={idList}>
                <styled.DashboardHeader>
                    <styled.Title
                        type="text"
                        value={title}
                        onChange={e => actions.updateTitleDashboard({
                            id: idList, newTitle: e.target.value,
                        })}
                        onBlur={(e) => {
                            e.target.value = !e.target.value ? (e.target.value = 'New Title') : e.target.value;
                            actions.updateTitleSuccess({ id: idList });
                        }}
                        onKeyDown={e => (e.key === 'Enter' && e.target.blur())}
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
                                    <Link to={`/list/${idList}`}>
                                        <styled.Icon src={info} alt="Information about this list" />
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
                        )
                }
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
