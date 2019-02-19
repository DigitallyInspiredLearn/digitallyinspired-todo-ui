/* eslint-disable react/destructuring-assignment,react/prop-types */
import React, { Component } from 'react';
import './css/taskStyle.css';

class TaskForList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayStyle: 'none',
        };
    }

    updateDisplayFlex = () => this.setState({ displayStyle: 'flex' });

    updateDisplayNone = () => this.setState({ displayStyle: 'none' });

    render() {
        const displayStyle = { display: this.state.displayStyle, zIndex: 50 };
        return (
            <div
                draggable="true"
                className="tasks"
                id={this.props.idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <div className="taskDiv">
                    <div
                        className={this.props.selected === false ? 'unselected' : 'fa fa-check-square'}
                        style={{ zIndex: 50 }}
                        onClick={() => {
                            this.props.actionsList.updateCheckboxList({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                selected: this.props.selected,
                            });
                        }}
                    />
                    <input
                        type="text"
                        value={this.props.nameTask}
                        className="taskName"
                        onChange={(e) => {
                            this.props.actionsList.updateTaskList({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: e.target.value,
                            });
                        }}
                    />
                    <div
                        className="trashTaskOneList"
                        style={displayStyle}
                        onClick={() => {
                            this.props.actionsList.deleteTaskList({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                            });
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default TaskForList;
