/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/taskStyle.css';
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

    render() {
        const { display } = this.state;
        const displayStyle = { display, zIndex: 50 };

        const {
            idTask, selected, actionsList, idList, nameTask,
        } = this.props;
        return (
            <stylesTask.Task
                id={idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <div className="taskDiv">
                    <div
                        className={selected ? 'fa fa-check-square' : 'unselected'}
                        style={{ zIndex: 50 }}
                        onClick={() => actionsList.updateCheckboxList({
                            idDashboard: idList, idTask, selected, nameTask,
                        })}
                    />
                    <input
                        type="text"
                        value={nameTask}
                        className="taskName"
                        onChange={e => actionsList.updateTaskList({
                            idDashboard: idList, idTask, selected, newTaskName: e.target.value,
                        })}
                    />
                     <div
                        className="trashTaskOneList"
                        style={displayStyle}
                        onClick={() => actionsList.deleteTaskList({
                            idDashboard: idList, idTask,
                        })}
                    />
                </div>
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
