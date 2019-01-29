import React from 'react';
import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'
import {Task} from "../task/Task";
import {NullLenghtTasks} from "../task/NullLenghtTasks";
import {Component} from 'react'

export class Dashboard extends Component {
    render(){
        return(
            <section id={this.props.idList}>
                <article>
                    <input
                        type="text"
                        value={this.props.title}
                        className="titleName"
                        onInput={(e) => {
                            this.props.updateTitle(this.props.idList, e.target.value);
                        }}
                    />
                    <div
                        className="deleteBoadr fa fa-trash fa-2x"
                        onClick={() => this.props.delDashboard(this.props.idList)}
                    />
                </article>
                <div className="taskLists">
                    {
                        this.props.tasks.length === 0 ? <NullLenghtTasks/>
                            : this.props.tasks.map(i => (
                                <Task
                                    idTask={i.id}
                                    key={i.id}
                                    selected={i.selected}
                                    nameTask={i.name}
                                    idList={this.props.idList}
                                    delTask={this.props.delTask}
                                    onChangeCheckbox={this.props.onChangeCheckbox}
                                    onChangeNameTask={this.props.onChangeNameTask}
                                />
                            ))
                    }
                </div>
                <input
                    className="addNewTask"
                    placeholder="add to-do"
                    style={{outline: "none"}}
                    value=""
                    onChange={(e) =>{
                        this.props.addNewTask(
                            e,
                            e.target.value,
                            this.props.idList,
                            55555555
                        );
                    }}
                />
            </section>
        )
    }
}



