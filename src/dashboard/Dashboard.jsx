import React, {Component} from 'react';
import del from "../image/delete.PNG";
import '../dashboard/Dashboard.css'
import {Task} from "./tasks/Task";

export class Dashboard extends Component {

    render() {
        return (
            <div className="box" id={this.props.idList}>
                    <span className="sp">
                                  <img
                                      src={del}
                                      className="deleteElement"
                                      id={this.props.idList} alt="Delete"
                                      onClick={() => this.props.deleteDashboard(this.props.idList)}
                                  />
                                  </span>
                <input
                    id={this.props.idList}
                    type="text"
                    className="title"
                    value={this.props.title}
                    onChange={(e) => this.props.changeTitle({id: this.props.idList, newValue: e.target.value})}
                />

                <div
                    className="form"
                    id="form"
                >

                {
                this.props.tasks.map(nameTask => {
                return <Task
                    id={nameTask.id}
                    name={nameTask.name}
                    selected={nameTask.selected}
                    key={nameTask.id}
                    deleteTask={this.props.deleteTask}
                    idBox={this.props.idList}
                    toggleActive={this.props.toggleActive}
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
                            this.props.addTask({idBox: this.props.idList, newValue: event.target.value});
                            event.target.value = "";
                        }
                    }
                    }
                />
            </div>
        );
    }
}

