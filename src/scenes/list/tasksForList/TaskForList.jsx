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
                            this.props.actions.updateCheckbox({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                selected: this.props.selected,
                            });
                            this.props.fetchList(this.props.idList);
                        }}
                    />
                    <input
                        type="text"
                        value={this.props.nameTask}
                        className="taskName"
                        onChange={e => {
                            this.props.updateTaskList({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: e.target.value,
                            });
                        }}
                        // onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                        // onBlur={(e) => {
                        //     if (e.target.value === '') {
                        //         e.target.value = 'to-do';
                        //     }
                        //     this.props.actions.onBlurs({ id: this.props.idList });
                        //     this.props.fetchList(this.props.idList);
                        // }}
                    />
                    <div
                        className="trashTaskOneList"
                        style={displayStyle}
                        onClick={() => {
                            this.props.deleteTaskList({
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