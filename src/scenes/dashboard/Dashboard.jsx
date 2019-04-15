/* eslint-disable react/prop-types,react/forbid-prop-types,
react/require-default-props,react/default-props-match-prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Comment from '@material-ui/icons/Comment';
import Delete from '@material-ui/icons/Delete';
import Restore from '@material-ui/icons/RestoreFromTrash';
import Share from '@material-ui/icons/Share';
import Info from '@material-ui/icons/Info';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import * as styled from './Dashboard.styled';
import Task from './task/Task';
import trash from '../../image/trash.svg';
import info from '../../image/information.svg';
import pushpin from '../../image/pushpin.svg';
import share from '../../image/share.svg';
import PopupContainer from '../popup/PopupContainer';
import Input from '../../components/input/Input';
import low from '../../image/low.svg';
import medium from '../../image/medium.svg';
import high from '../../image/high.svg';

const styles = theme => ({
    textField: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
    },
});

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
                todoListStatus={props.todoListStatus}
                createdDate={i.createdDate}
                completedDate={i.completedDate}
                durationTime={i.durationTime}
                priority={i.priority}
            />
        )));

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
            statePopup: false,
            stateComment: false,
            newTitle: props.title,
            newComment: props.comment,
            priority: 'NOT_SPECIFIED',
        };
    }

    changeValueNewTask = e => this.setState({
        valueNewTask: e.target.value,
    });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
            priority: 'NOT_SPECIFIED',
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

    handleUpdateComment = (newValue) => {
        const { actions, idList, title } = this.props;
        this.setState({ newComment: newValue }, () => {
            const { newComment } = this.state;
            actions.updateComment({
                id: idList, title, newComment,
            });
        });
    };

    handleUpdateTitleSuccess = () => {
        const { actions, idList } = this.props;
        const { newTitle } = this.state;
        actions.updateTitleSuccess({ id: idList, newTitle });
    };

    handleUpdateCommentSuccess = () => {
        const { actions, idList, title } = this.props;
        const { newComment } = this.state;
        actions.updateCommentSuccess({ id: idList, title, newComment });
    };

    handleChangePriority = (e) => {
        this.setState({ priority: e.target.value });
    };

    render() {
        const {
            valueNewTask, statePopup, stateComment, priority,
        } = this.state;
        const {
            idList, title, todoListStatus, tasks, actions, actionsBasket, shared, createdBy, createdDate,
            modifiedBy, modifiedDate, comment, currentUser: { gravatarUrl },
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
                    <styled.Avatar
                        src={`${gravatarUrl}?s=120&d=retro`}
                    />

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
                        todoListStatus === 'ACTIVE' ? (
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
                                                    <b>Information about list "{title}":</b><br />
                                                    Created by: {createdBy}<br />
                                                    Created time: {new Date(createdDate).toLocaleString()}<br />
                                                    Modyfied by: {modifiedBy}<br />
                                                    Modyfied time: {new Date(modifiedDate).toLocaleString()}<br />
                                                    Comment: {comment ? comment : 'not written yet'}
                                                </p>
                                                <IconButton
                                                    aria-label="info"
                                                    style={{ borderRadius: '40%', padding: '4px' }}
                                                    alt="Information about this list"

                                                >
                                                    <Info />
                                                </IconButton>
                                            </styled.IconInfo>
                                        </Link>
                                        <IconButton
                                            aria-label="share"
                                            style={{ borderRadius: '40%', padding: '4px' }}
                                            onClick={this.showPopup}
                                            alt="Share list"

                                        >
                                            <Share />
                                        </IconButton>
                                        <IconButton
                                            aria-label="trash"
                                            onClick={() => actions.deleteDashboard({ id: idList })}
                                            style={{ borderRadius: '40%', padding: '4px' }}
                                            alt="Delete this list"
                                        >
                                            <Delete />
                                        </IconButton>
                                    </styled.IconContainer>
                                )
                        ) : (
                            <styled.IconContainer>
                                <IconButton
                                    aria-label="restore"
                                    onClick={() => actionsBasket.restoreList({ id: idList })}
                                    alt="Restore this list"
                                    style={{ borderRadius: '40%', padding: '4px' }}
                                >
                                    <Restore
                                        style={{ borderRadius: '40%' }}
                                    />
                                </IconButton>
                                <IconButton
                                    aria-label="trash"
                                    onClick={() => actionsBasket.deletedList({ id: idList })}
                                    style={{ borderRadius: '40%', padding: '4px' }}
                                    alt="Delete this list"

                                >
                                    <Delete />
                                </IconButton>
                            </styled.IconContainer>
                        )
                    }
                </styled.DashboardHeader>
                <styled.TaskList>
                    {getTaskList(tasks, this.props)}
                </styled.TaskList>
                {
                    todoListStatus === 'ACTIVE' ? (
                        shared ? ''
                            : (
                                <div style={{ display: 'flex' }}>
                                    <styled.InputAddingTask
                                        style={{ alignSelf: 'center' }}
                                        placeholder="Add to-do"
                                        value={valueNewTask}
                                        onChange={this.changeValueNewTask}
                                        onKeyPress={e => valueNewTask
                                        && (e.key === 'Enter'
                                            && (e.target.blur(), actions.addTask({
                                                idDashboard: idList, nameTask: valueNewTask, priority,
                                            }), this.setState({ priority: 'NOT_SPECIFIED' })
                                            
                                            ))
                                        }
                                        onBlur={this.handlerOnBlur}
                                    />
                                    <FormControl
                                        style={{ marginTop: '-10px', marginRight: '50px' }}
                                    >
                                        <InputLabel htmlFor="age-simple">Priority</InputLabel>
                                        <Select
                                            value={priority}
                                            onChange={this.handleChangePriority}
                                            inputProps={{
                                                name: 'age',
                                                id: 'age-simple',
                                            }}
                                            style={{ width: '155px' }}
                                        >
                                            <MenuItem value="NOT_SPECIFIED">
                                                <em>NOT SPECIFIED</em>
                                            </MenuItem>
                                            <MenuItem value="LOW">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={low}
                                                    alt="LOW"
                                                />
                                                LOW
                                            </MenuItem>
                                            <MenuItem value="MEDIUM">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={medium}
                                                    alt="MEDIUM"
                                                />
                                                MEDIUM
                                            </MenuItem>
                                            <MenuItem value="HIGH">
                                                <img
                                                    width="15%"
                                                    height="15%"
                                                    src={high}
                                                    alt="HIGH"
                                                />
                                                HIGH
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                    <IconButton
                                        aria-label="Delete"
                                        onClick={this.toggleComment}
                                    >
                                        <Comment />
                                    </IconButton>
                                </div>
                            )
                    ) : null
                }
                <styled.Expand
                    visible={stateComment}
                >
                    <TextField
                        onChange={e => this.handleUpdateComment(e.target.value)}
                        defaultValue={comment}
                        multiline
                        autoFocus
                        rowsMax="3"
                        variant="outlined"
                        margin="normal"
                        // onKeyPress={e => e.key === 'Enter'
                        //     && (e.target.blur(), this.handleUpdateCommentSuccess())
                        // }
                        onBlur={() => this.handleUpdateCommentSuccess()}
                        placeholder="Type comment about this list"
                        style={{
                            width: '90%', fontWeight: 'bold',
                        }}
                    />
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
