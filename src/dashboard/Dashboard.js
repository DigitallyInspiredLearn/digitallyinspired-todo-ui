import React, {Component} from 'react';
import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'
import {Task} from "../task/Task";

export class Dashboard extends Component {
    state = {
        value: '',
    };
    changeValue = (e) =>{
        this.setState({
            value : e.target.value
        })
    };

    handlerEnterDown =(e) =>{
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };

    render() {
        return (
            <section id={this.props.idList}>
                <article>
                    <input
                        type="text"
                        value={this.props.title}
                        className="titleName"
                        onChange={(e) => this.props.updateDashboardTitle(this.props.idList, e.target.value,e)}
                        onKeyPress={this.handlerEnterDown}
                    />
                    <div
                        className="deleteBoadr fa fa-trash fa-2x"
                        onClick={() => this.props.deleteDashboard(this.props.idList)}
                    />
                </article>
                <div className="taskLists">
                    {
                        this.props.tasks.map(i => (
                            <Task
                                idTask={i.id}
                                key={i.id}
                                selected={i.selected}
                                nameTask={i.name}
                                idList={this.props.idList}
                                deleteTask={this.props.deleteTask}
                                updateNameTask={this.props.updateNameTask}
                                updateSelectedTask={this.props.updateSelectedTask}
                            />
                        ))
                    }
                </div>
                <input
                    className="addNewTask"
                    placeholder="add to-do"
                    style={{outline: "none"}}
                    value={this.state.value}
                    onChange={this.changeValue}
                    // onKeyPress={(e) =>this.props.addNewTask(e,this.state.value,this.props.idList,this.props.randomInteger(1,1000000))}
                />
            </section>
        );
    }
}

