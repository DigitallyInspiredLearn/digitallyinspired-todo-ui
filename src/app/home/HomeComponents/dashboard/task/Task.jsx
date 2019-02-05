import React, {Component} from 'react';
import './css/taskStyle.css'

export class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayStyle: 'none'
        };
    }

    updateDisplayFlex = () => this.setState({
        displayStyle: 'flex'
    });

    updateDisplayNone = () => this.setState({
        displayStyle: 'none'
    });


    render() {
        const displayStyle = {display: this.state.displayStyle};

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
                        style={{zIndex: 5}}
                        onClick={() => this.props.onChangeCheckbox({
                            idDashboard: this.props.idList,
                            idTask: this.props.idTask,
                            selected: this.props.selected
                        })}
                    />
                    <input
                        type="text"
                        value={this.props.nameTask}
                        className="taskName"
                        onChange={(e) => this.props.onChangeNameTask({
                                idDashboard: this.props.idList,
                                idTask: this.props.idTask,
                                newTaskName: e.target.value
                            }
                        )}
                        onKeyDown={(e) => e.key === 'Enter' ? e.target.blur() : -1}
                        onBlur={(e) => this.props.defaultValueFromTask(
                            e.target.value,
                            this.props.idList,
                            this.props.idTask
                        )}
                    />
                    <label
                        className="deleteTask fa fa-trash"
                        style={displayStyle}
                        onClick={() =>
                            this.props.delTask({
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