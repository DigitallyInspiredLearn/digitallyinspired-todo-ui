/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Delete from '@material-ui/icons/Delete';
import { AlertDialog } from "../../../components/dialog/AlertDialog";
import * as stylesTask from '../../dashboard/task/Task.styled';

class TaskForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            visible: false,
        };
    }

    updateDisplayFlex = () => this.setState({ display: 'flex' });

    updateDisplayNone = () => this.setState({ display: 'none' });

    showAlertDialog = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        })
    };

    render() {
        const { display, visible } = this.state;
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
                        onClick={this.showAlertDialog}
                        style={displayStyle}
                        alt="Delete this task"
                    />
                    <AlertDialog
                        visible={visible}
                        onClose={this.showAlertDialog}
                        value='Do you want to delete this task?'
                        onConfirm={() => actionsList.deleteTaskList({
                            idDashboard: idList, idTask,
                        })}
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
