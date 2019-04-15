/* eslint-disable react/prop-types,react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import Info from '@material-ui/icons/Info';
import PopapAddTagToTask from './popapAddTagToTask/PopapAddTagToTask';
import moment from 'moment';
import Tooltip from '@material-ui/core/Tooltip';
import * as styled from './Task.styled';
import Checkbox from '../../../components/checkbox/Checkbox';
import Input from '../../../components/input/Input';
import Dialog from './dialog/Dialog';
import low from '../../../image/low.svg';
import medium from '../../../image/medium.svg';
import high from '../../../image/high.svg';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            statePopup: false,
            newTaskName: props.nameTask,
            visiblePopapAddTagToTask: false,
            selectedTask: '',
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showPopapAddTagToTask = idTask => this.setState({ visiblePopapAddTagToTask: true, selectedTask: idTask });

    closePopapAddTagToTask = () => this.setState({ visiblePopapAddTagToTask: false });

    showPopup = () => this.setState({ statePopup: true });

    closePopup = () => this.setState({ statePopup: false });

    handleCompleteTask = (time) => {
        const {
            selected, actions, nameTask, idTask, priority,
        } = this.props;

        this.setState({ statePopup: false });
        const durationTime = moment.duration(time.duration).valueOf();
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
                    <Tooltip title="LOW">
                        <img src={low} width="20px" height="25px" alt="LOW" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            case 'MEDIUM':
                return (
                    <Tooltip title="MEDIUM">
                        <img src={medium} width="20px" height="25px" alt="MEDIUM" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            case 'HIGH':
                return (
                    <Tooltip title="HIGH">
                        <img src={high} width="20px" height="25px" alt="HIGH" style={{ marginLeft: '4px' }} />
                    </Tooltip>
                );
            default:
                return null;
        }
    };

    render() {
        const {
            display, statePopup, visiblePopapAddTagToTask, selectedTask,
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
                            style={todoListStatus === 'ACTIVE' ?
                                { textDecoration: selected ? 'line-through' : 'none', width: '100%', marginLeft: '0', }
                            : { textDecoration: selected ? 'line-through' : 'none', width: '100%', pointerEvents: 'none' }}
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
                                </p>
                                <Info
                                    aria-label="info"
                                    style={displayStyle}
                                    alt="Information about this list"
                                />
                            </styled.IconInfo>,
                            <styled.AddTag
                                style={displayStyle}
                                onClick={() => this.showPopapAddTagToTask(idTask)}
                            >
                                +
                            </styled.AddTag>,
                            <Delete
                                aria-label="trash"
                                onClick={() => actions.deleteTask({ idTask })}
                                style={displayStyle}
                                alt="Delete this task"
                            />
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
