import React, {Component} from 'react';
import {Task} from "../dashboard/tasks/Task";
import '../oneList/OneList.css'
import list from '../image/tolist.jpg'
import {Link} from 'react-router-dom'


export class OneList extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className='mainTitle'>
                    <h1>{this.props.data.title}</h1>
                </div>
                <div className='content'>
                    <div className="boxList" id={this.props.idList}>
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
                            onChange={(e) => this.props.actions.changeTitle({
                                id: this.props.idList,
                                newValue: e.target.value
                            })}
                        />

                        <div
                            className="formList"
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
                                    this.props.actions.addTask({
                                        idBox: this.props.idList,
                                        newValue: event.target.value
                                    });
                                    event.target.value = "";
                                }
                            }
                            }
                        />
                    </div>
                    <div className='imgList'>
                        <img
                            src={list}
                            alt='List'
                        />

                        <Link to='/list'>
                            <button className='butMain'>Главная</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

