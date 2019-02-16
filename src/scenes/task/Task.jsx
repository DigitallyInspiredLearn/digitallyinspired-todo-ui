import React, { Component } from 'react';
import './css/taskStyle.css';
import trash from '../../image/trash.svg'

class Task extends Component {
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
                draggable="false"
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
                            this.props.actions.updateCheckbox({
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
                        onChange={e => {
                            this.props.actions.updateTaskName({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: e.target.value,
                            });
                        }}
                        onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                        onBlur={(e) => {
                            if (e.target.value === '') {
                                e.target.value = 'New task';
                            }
                            this.props.actions.onBlurs({ id: this.props.idList });
                        }}
                    />
                </div>
                <div className="trashTask">
                    <img
                        src={trash}
                        className="deleteTask"
                        alt='Delete this task'
                        style={displayStyle}
                        onClick={() => {
                            this.props.actions.deleteTask({
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

export default Task;
