/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import Info from '@material-ui/icons/Info';
import Empty from '@material-ui/icons/ArrowUpward';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import { AlertDialog } from '../../../components/dialog/AlertDialog';
import PopapAddTagToTask from './popapAddTagToTask/PopapAddTagToTask';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import Input from '../../../components/input/Input';
import Dialog from './dialog/Dialog';
import low from '../../../image/low.svg';
import medium from '../../../image/medium.svg';
import high from '../../../image/high.svg';
import empty from '../../../image/empty.svg';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            statePopup: false,
            newTaskName: props.nameTask,
            visiblePopapAddTagToTask: false,
            selectedTask: '',
            durationTime: props.durationTime,
            visible: false,
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopapAddTagToTask = idTask => this.setState({ visiblePopapAddTagToTask: true, selectedTask: idTask });

    closePopapAddTagToTask = () => this.setState({ visiblePopapAddTagToTask: false });

    showPopup = () => this.setState({ statePopup: true });

    closePopup = () => this.setState({ statePopup: false });

    showAlertDialog = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    };

    handleCompleteTask = (time) => {
        const {
            selected, actions, nameTask, idTask, priority,
        } = this.props;

        this.setState({ statePopup: false });
        const durationTime = moment.duration(time.duration).valueOf();
        this.setState({ durationTime });
        actions.updateCheckbox({
            nameTask, idTask, selected, body: nameTask, durationTime, priority,
        });
    };

    handleSelectTask = () => {
        const {
            selected, actions, nameTask, idTask, priority,
        } = this.props;

        if (!selected) {
            this.setState({ statePopup: true });
        } else {
            this.setState({ durationTime: 0 });
            actions.updateCheckbox({
                nameTask, idTask, selected, body: nameTask, durationTime: 0, priority,
            });
        }
    };

    handleUpdateTask = (newValue) => {
        const {
            idTask, actions, idList,
        } = this.props;
        const { newTaskName } = this.state;
        this.setState({
            newTaskName: newValue,
        });
        actions.updateTaskName({
            idDashboard: idList, idTask, newTaskName,
        });
    };

    handleUpdateTaskSuccess = () => {
        const {
            idTask, selected, actions, priority,
        } = this.props;
        const { newTaskName } = this.state;
        actions.updateTaskNameSuccess({
            newTaskName,
            selected,
            idTask,
            priority,
        });
    };

    setIcon = (priority) => {
        switch (priority) {
            case 'LOW':
                return (
                    <Tooltip title="Priority: LOW">
                        <img src={low} width="20px" height="25px" alt="low" style={{ padding: '0 4px' }} />
                    </Tooltip>
                );
            case 'MEDIUM':
                return (
                    <Tooltip title="Priority: MEDIUM">
                        <img src={medium} width="20px" height="25px" alt="medium" style={{ padding: '0 4px' }} />
                    </Tooltip>
                );
            case 'HIGH':
                return (
                    <Tooltip title="Priority: HIGH">
                        <img src={high} width="20px" height="25px" alt="high" style={{ padding: '0 4px' }} />
                    </Tooltip>
                );
            default:
                return (
                    <Tooltip title="Priority: NOT SPECIFIED">
                        <Empty width="20px" height="20px" alt="not_specified" style={{ padding: '3px 4px', width: '20px', height: '20px' }} />
                    </Tooltip>
                );
        }
    };

    render() {
        const {
            display, statePopup, visiblePopapAddTagToTask, selectedTask, durationTime, visible,
        } = this.state;
        const displayStyle = { display, color: 'rgba(0, 0, 0, 0.54)' };
        const {
            idTask,
            selected,
            actions,
            nameTask,
            createdDate,
            completedDate,
            allTags,
            tagTaskKeys,
            todoListStatus,
            priority,
        } = this.props;
        return (
            <React.Fragment>
                {
                    statePopup && (
                        <Dialog
                            show={statePopup}
                            onClose={this.closePopup}
                            onConfirm={this.handleCompleteTask}
                            createdDate={createdDate}
                            completedDate={completedDate}
                        />
                    )
                }
                {
                    todoListStatus === 'ACTIVE' ? (
                        <PopapAddTagToTask
                            show={visiblePopapAddTagToTask}
                            handleClose={this.closePopapAddTagToTask}
                            actions={actions}
                            allTags={allTags}
                            selectedTask={selectedTask}
                        />
                    ) : null
                }
                <styled.Task
                    id={idTask}
                    onMouseOver={this.updateDisplayFlex}
                    onMouseOut={this.updateDisplayNone}
                    key={idTask}
                >
                    <styled.NameAdnCheckedTask>
                        <Checkbox
                            checked={selected}
                            onChange={this.handleSelectTask}
                        />
                        { this.setIcon(priority) }
                        <Input
                            onChange={this.handleUpdateTask}
                            value={nameTask}
                            onBlur={this.handleUpdateTaskSuccess}
                            border={false}
                            style={todoListStatus === 'ACTIVE'
                                ? { textDecoration: selected ? 'line-through' : 'none', width: '80%', marginLeft: '0' }
                                : { textDecoration: selected ? 'line-through' : 'none', width: '80%', pointerEvents: 'none' }}
                        />
                    </styled.NameAdnCheckedTask>
                    {
                        todoListStatus === 'ACTIVE' ? ([
                            <styled.IconInfo>
                                <p>
                                    <b>Information about this task:</b><br />
                                    Created Date: {new Date(createdDate).toLocaleString()}<br />
                                    <div style={{
                                        display: 'flex', flexWrap: 'wrap', alignItems: 'center', cursor: 'default',
                                    }}
                                    >
                                        Tags: {
                                            tagTaskKeys.map(key => key.taskId === idTask
                                            && (
                                                <span
                                                    style={{
                                                        backgroundColor: key.tag.color,
                                                        padding: '2px 4px',
                                                        margin: '4px',
                                                        borderRadius: '2px',
                                                    }}
                                                >
                                                    {key.tag.tagName}
                                                    <span
                                                        style={{
                                                            backgroundColor: 'white',
                                                            padding: ' 0 4px',
                                                            borderRadius: '2px',
                                                            border: '1px solid grey',
                                                            marginLeft: '4px',
                                                            opacity: 0.8,
                                                        }}
                                                        onClick={() => actions.removeTagFromTask({ idTag: key.tag.id, idTask })}
                                                    >x
                                                    </span>
                                                </span>
                                            ))
                                        }
                                    </div>
                                    Completed Date: {selected ? new Date(completedDate).toLocaleString()
                                        : 'in process'}<br />
                                    {
                                        (durationTime !== null && durationTime !== 0)
                                            ? `Duration time: ${(moment.duration(durationTime).days())}d
                                                ${(moment.duration(durationTime).hours())}h
                                                ${(moment.duration(durationTime).minutes())}m`
                                            : null
                                    }
                                </p>
                                <Info
                                    aria-label="info"
                                    style={displayStyle}
                                    alt="Information about this task"
                                />
                            </styled.IconInfo>,
                            <Tooltip title="Add tag for this task">
                                <styled.AddTag
                                    style={displayStyle}
                                    onClick={() => this.showPopapAddTagToTask(idTask)}
                                >
                                    +
                                </styled.AddTag>
                            </Tooltip>,
                            <Tooltip title="Delete task">
                                <Delete
                                    aria-label="trash"
                                    // onClick={() => actions.deleteTask({ idTask })}
                                    onClick={this.showAlertDialog}
                                    style={displayStyle}
                                    alt="Delete task"
                                />
                            </Tooltip>,
                            <AlertDialog
                                visible={visible}
                                onClose={this.showAlertDialog}
                                value="Do you want to delete this task?"
                                onConfirm={() => actions.deleteTask({ idTask })}
                            />,
                        ]) : null
                    }
                </styled.Task>
            </React.Fragment>
        );
    }
}

Task.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
    priority: PropTypes.string,
};

export default Task;
