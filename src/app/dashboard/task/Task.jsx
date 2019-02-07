import React, {Component} from 'react';
import './css/taskStyle.css'

export class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayStyle: 'none'
        };
    }

    updateDisplayFlex = () => this.setState({displayStyle: 'flex'});
    updateDisplayNone = () => this.setState({displayStyle: 'none'});

    render() {
        const displayStyle = {display: this.state.displayStyle, zIndex: 50};
        return (
            <div
                className="tasks"
                id={this.props.idTask}
                onMouseOver={this.updateDisplayFlex}
                onMouseOut={this.updateDisplayNone}
            >
                <div className="taskDiv">
                    <div
                        className={this.props.selected === false ? 'unselected' : 'fa fa-check-square'}
                        style={{zIndex: 50}}
                        onClick={() =>
                            this.props.actions.updateCheckbox({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                selected: this.props.selected
                            })
                        }
                    />
                    <input
                        type="text"
                        defaultValue={this.props.nameTask}
                        className="taskName"
                        onChange={(e) =>
                            this.props.actions.updateTaskName({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: e.target.value
                            }
                        )}
                        onKeyDown={(e) => e.key === 'Enter' ? e.target.blur() : -1}
                        onBlur={(e) => {
                            let value = e.target.value === '' ? e.target.value = 'to-do' : e.target.value;
                            this.props.actions.updateTaskName({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: value
                            })
                        }}
                    />
                    <label
                        className="deleteTask fa fa-trash"
                        style={displayStyle}
                        onClick={() =>
                            this.props.actions.deleteTask({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask
                            })
                        }
                    />
                </div>
            </div>
        )
    }
}