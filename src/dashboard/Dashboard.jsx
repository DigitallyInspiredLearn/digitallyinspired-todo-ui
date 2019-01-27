import React, {Component} from 'react';
import del from "../image/delete.PNG";
import {Task} from "./tasks/Task";
import '../dashboard/Dashboard.css'

export class Dashboard extends Component {
    render() {
        return (
            <div className="box" id={this.props.data.idList}>
                                  <span className="sp">
                                  <img
                                      src={del}
                                      className="deleteElement"
                                      id={this.props.data.idList} alt="Delete"
                                      onClick={() => this.props.deleteDashboard(this.props.data.idList)}/>
                                  </span>
                <input
                    id={this.props.data.idList}
                    type="text"
                    className="title"
                    value={this.props.data.title}
                    onChange={(e) => this.props.changeTitle(this.props.data.idList, e.target.value)}
                />

                {
                    this.props.data.tasks.map(nameTask => {
                        return <Task
                            id = {nameTask.id}
                            name = {nameTask.name}
                            selected = {nameTask.selected}
                            key={nameTask.id}
                            deleteTask={this.props.deleteTask}
                            idBox={this.props.data.idList}
                            toggleActive = {this.props.toggleActive}
                        />
                    })
                }
                <input
                    className="addToDo"
                    type="text"
                    placeholder="Add to-do"
                    onKeyPress={event =>
                    {
                        if (event.key === 'Enter') {
                            this.props.addTask(this.props.data.idList, event.target.value);
                            event.target.value = "";
                        }
                    }
                    }
                />
            </div>
        );
    }
}