import React, {Component} from 'react';
import '../dashboard/Dashboard.css'
import {Task} from "../dashboard/tasks/Task";


export class OneList extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="box" id={this.props.idList}>
                    <span className="sp">
                                  <div
                                      className="fa fa-trash fa-2x"
                                      id={this.props.idList}
                                      onClick={() => this.props.actions.deleteDashboard(this.props.idList)}
                                  />
                                  </span>

                <input
                    id={this.props.idList}
                    type="text"
                    className="title"
                    value={this.props.data.title}
                    onChange={(e) => this.props.actions.changeTitle({id: this.props.idList, newValue: e.target.value})}
                />

                <div
                    className="form"
                    id="form"
                >
                    {
                        this.props.data.tasks && this.props.data.tasks.map(nameTask => {
                            return <Task
                                id={nameTask.id}
                                name={nameTask.name}
                                selected={nameTask.selected}
                                key={nameTask.id}
                                deleteTask={this.props.actions.deleteTask}
                                idBox={this.props.idList}
                                toggleActive={this.props.actions.toggleActive}
                            />

                        })
                    }
                </div>
                <input
                    className="addToDo"
                    type="text"
                    placeholder="Add to-do"
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.props.actions.addTask({idBox: this.props.idList, newValue: event.target.value});
                            event.target.value = "";
                        }
                    }
                    }
                />
            </div>
        );
    }
}

