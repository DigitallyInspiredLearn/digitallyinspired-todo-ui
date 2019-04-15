/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import * as stylesTask from '../../dashboard/task/Task.styled';

class TaskForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

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
        const { display } = this.state;
        const displayStyle = { display, zIndex: 50, color: 'rgba(0, 0, 0, 0.54)' };

        const {
            idTask, selected, actionsList, idList, nameTask,
        } = this.props;
        return (
            <stylesTask.Task
                id={idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <stylesTask.NameAdnCheckedTask>
                    <stylesTask.CheckboxTask
                        selected={selected}
                        onClick={() => actionsList.updateCheckboxList({
                            idDashboard: idList, idTask, selected, nameTask,
                        })}
                    />
                    <stylesTask.TaskName
                        type="text"
                        value={nameTask}
                        selected={selected}
                        onChange={e => actionsList.updateTaskList({
                            idDashboard: idList, idTask, selected, newTaskName: e.target.value,
                        })}
                    />
                    <Delete
                        aria-label="trash"
                        onClick={() => actionsList.deleteTaskList({
                            idDashboard: idList, idTask,
                        })}
                        style={displayStyle}
                        alt="Delete this task"
                    />
                </stylesTask.NameAdnCheckedTask>
            </stylesTask.Task>
        );
    }
}

TaskForList.propTypes = {
    idTask: PropTypes.number,
    selected: PropTypes.bool,
    nameTask: PropTypes.string,
};

export default TaskForList;
