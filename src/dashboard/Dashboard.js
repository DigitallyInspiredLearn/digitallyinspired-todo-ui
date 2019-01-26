import React, {Component} from 'react';
import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'
import {Task} from "../task/Task";
import {NullLenghtTasks} from "../task/NullLenghtTasks";

export class Dashboard extends Component {
    state = {
        valueNewTask: '',
        value:''
    };
    changeValueNewTask = (e) =>{
        this.setState({
            valueNewTask : e.target.value
        })
    };

    handlerOnBlur = (e) =>{
        e.target.blur();
            this.setState({
                valueNewTask:this.state.valueNewTask=e.target.value=''})
    };
    render() {
        return (
            <section id={this.props.idList}>
                <article>
                    <input
                        type="text"
                        value={this.props.title}
                        className="titleName"
                        onChange={(e) => {
                            this.props.updateDashboardTitle(this.props.idList, e.target.value);
                           }
                        }
                        onBlur={(e) => this.props.defaultValueFromTitle(e,e.target.value,this.props.idList)}
                        onKeyDown={(e) =>e.key === 'Enter'?e.target.blur():-1}
                    />
                    <div
                        className="deleteBoadr fa fa-trash fa-2x"
                        onClick={() => this.props.deleteDashboard(this.props.idList)}
                    />
                </article>
                <div className="taskLists">
                    {
                        this.props.tasks.length ===0 ? <NullLenghtTasks/>
                            : this.props.tasks.map(i => (
                                <Task
                                    idTask={i.id}
                                    key={i.id}
                                    selected={i.selected}
                                    nameTask={i.name}
                                    idList={this.props.idList}
                                    deleteTask={this.props.deleteTask}
                                    updateNameTask={this.props.updateNameTask}
                                    updateSelectedTask={this.props.updateSelectedTask}
                                    defaultValueFromTask={this.props.defaultValueFromTask}
                                />
                            ))
                    }
                </div>
                <input
                    className="addNewTask"
                    placeholder="add to-do"
                    style={{outline: "none"}}
                    value={this.state.valueNewTask}
                    onChange={this.changeValueNewTask}
                    onKeyPress={(e) =>{
                        this.props.addNewTask(
                            e,
                            this.state.valueNewTask,
                            this.props.idList,
                            this.props.randomInteger(1,1000000)
                        );
                    }}
                    onBlur={e => this.handlerOnBlur(e)}
                />
            </section>
        );
    }
}

