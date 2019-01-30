import React from 'react';
import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'
import { Task } from "../task/Task";
import { NullLenghtTasks } from "../task/NullLenghtTasks";
import { Component } from 'react'

export class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
        }
    }

    changeValueNewTask = (e) => {
        this.setState({
            valueNewTask : e.target.value
        })
    };

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = ''
        })
    };

    render() {
        return(
            <section id = { this.props.idList } >
                <article>
                    <input
                        type = "text"
                        value = { this.props.title }
                        className = "titleName"
                        onInput = { (e) => {
                            this.props.updateTitle(this.props.idList, e.target.value);
                        }}
                        onBlur = { (e) => this.props.defaultValueFromTitle(
                            e,
                            e.target.value,
                            this.props.idList,
                        )}
                        onKeyDown = { (e) => e.key === 'Enter' ? e.target.blur() : -1 }
                    />
                    <div
                        className = "deleteBoadr fa fa-trash fa-2x"
                        onClick = { () => this.props.delDashboard(this.props.idList)}
                    />
                </article>
                <div className = "taskLists">
                    {
                        this.props.tasks.length === 0 ? <NullLenghtTasks/>
                            : this.props.tasks.map(i => (
                                <Task
                                    idTask = { i.id }
                                    key = { i.id }
                                    selected = { i.selected }
                                    nameTask = { i.name }
                                    idList = { this.props.idList }
                                    delTask = { this.props.delTask }
                                    onChangeCheckbox = { this.props.onChangeCheckbox }
                                    onChangeNameTask = { this.props.onChangeNameTask }
                                    defaultValueFromTask = { this.props.defaultValueFromTask }
                                />
                            ))
                    }
                </div>
                <input
                    className = "addNewTask"
                    placeholder = "add to-do"
                    style = { { outline: "none" } }
                    value = { this.state.valueNewTask }
                    onChange = { this.changeValueNewTask }
                    onKeyPress = { (e) => {
                        if( this.state.valueNewTask === ''){}
                        else {
                            if ( e.key === 'Enter' ) {
                                e.target.blur();
                                this.props.addNewTask(
                                    this.props.idList,
                                    this.state.valueNewTask,
                                    this.props.randomInteger(1,1000000, this.props.data),
                                );
                            }
                        }
                    }}
                    onBlur={ e => this.handlerOnBlur(e)}
                />
            </section>
        )
    }
}
