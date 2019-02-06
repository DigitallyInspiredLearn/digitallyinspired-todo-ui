import React, {Component} from 'react';
import '../dashboard/Dashboard.css'
import info from '../image/info.png'
import {Task} from "./tasks/Task";
import {Link} from 'react-router-dom'


export class Dashboard extends Component {

    render() {
        return (
            <div className="box" id={this.props.idList}>
                    <span className="sp">
                                  <div
                                      className="fa fa-trash fa-2x"
                                      id={this.props.idList}
                                      onClick={() => this.props.deleteDashboard(this.props.idList)}
                                  />

                        <Link to={`/${this.props.idList}`}>
                            <img
                                id={this.props.idList}
                                src={info}
                                className='infoDashboard'
                                alt='Inform'
                                onClick={() => this.props.infoAboutList(this.props.idList)}
                            />
                        </Link>
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

