/* eslint-disable react/prop-types*/

import React, { Component } from 'react';
import './css/taskStyle.css';
import trash from '../../image/trash.svg';

class Task extends Component {
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
        const displayStyle = { display };
        const {
            idTask, selected, actions, idList, nameTask,
        } = this.props;

        return (
            <div
                draggable="false"
                className="tasks"
                id={idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <div className="taskDiv">
                    <div
                        className={selected ? 'fa fa-check-square' : 'unselected'}
                        style={{ zIndex: 50 }}
                        onClick={() => {
                            actions.updateCheckbox({
                                idDashboard: idList, idTask, selected, body: nameTask,
                            });
                        }}
                    />
                    <input
                        type="text"
                        value={nameTask}
                        className="taskName"
                        onChange={(e) => {
                            actions.updateTaskName({
                                idDashboard: idList, idTask, newTaskName: e.target.value,
                            });
                        }}
                        onKeyDown={e => e.key === 'Enter' && e.target.blur()}
                        onBlur={(e) => {
                            e.target.value = e.target.value ? 'New task' : e.target.value;
                            actions.updateTitleSuccess({ id: idList });
                        }}
                    />
                </div>
                <div className="trashTask">
                    <img
                        src={trash}
                        className="deleteTask"
                        alt="Delete this task"
                        style={displayStyle}
                        onClick={() => actions.deleteTask({ idTask })}
                    />
                </div>
            </div>
        );
    }
}
export default Task;
