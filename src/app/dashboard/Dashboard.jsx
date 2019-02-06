import React, {Component} from 'react';
import {Task} from "./task/Task";
import {NullLenghtTasks} from "./task/NullLenghtTasks";
import {Link} from "react-router-dom";

import './css/dashboardStyle.css'
import './css/dashboardStyleForComp.css'

export const getTaskList = (tasks, props) => {
    return tasks.length === 0 ? <NullLenghtTasks/>
        :tasks.map(i => (
            <Task
                idTask={i.id}
                key={i.id}
                selected={i.selected}
                nameTask={i.name}
                idList={props.idList}
                delTask={props.delTask}
                onChangeCheckbox={props.onChangeCheckbox}
                onChangeNameTask={props.onChangeNameTask}
                defaultValueFromTask={props.defaultValueFromTask}
            />
        ))
};
export class Dashboard extends Component {

    constructor(props) {
        super(props);
        // this.myRef = React.createRef();
        this.state = {
            valueNewTask: '',
        }
    }

    changeValueNewTask = (e) => {
        this.setState({
            valueNewTask: e.target.value
        })
    };

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = ''
        })
    };


    // handleClick = () => {
    //     console.log(this.myRef.innerHTML());
    // }

    render() {
        return (
            <section id={this.props.idList} key={this.props.idList}
                     // ref={this.myRef}
            >

                    <article>
                        <input
                            type="text"
                            defaultValue={this.props.title}
                            className="titleName"
                            onChange={(e) => this.props.updateTitle({
                                id: this.props.idList,
                                newTitle: e.target.value
                            })
                            }
                            onBlur={(e) => this.props.defaultValueFromTitle(
                                e,
                                e.target.value,
                                this.props.idList,
                            )}
                            onKeyDown={(e) => e.key === 'Enter' ? e.target.blur() : -1}
                            // onClick={() => this.props.fetchOneDashboardSuccess({id: this.props.idList})}
                        />
                        <Link to={`/list`}>
                            <div
                                className='linkList fa fa-external-link fa-2x'
                                // onClick={this.handleClick}
                            />
                        </Link>
                        <div
                            className="deleteBoadr fa fa-trash fa-2x"
                            onClick={() => this.props.delDashboard({id: this.props.idList})}
                            title='delete list'
                        />
                    </article>
                    <div className="taskLists">
                        {getTaskList(this.props.tasks, this.props)}
                    </div>

                <input
                    className="addNewTask"
                    placeholder="add to-do"
                    style={{outline: "none"}}
                    defaultValue={this.state.valueNewTask}
                    onChange={this.changeValueNewTask}
                    onKeyPress={(e) => {
                        if (this.state.valueNewTask === '') {
                        } else {
                            if (e.key === 'Enter') {
                                e.target.blur();
                                this.props.addNewTask({
                                        idDashboard: this.props.idList,
                                        nameTask: this.state.valueNewTask,
                                        idTask: this.props.randomInteger(1, 1000000, this.props.toDoBoard)
                                    }
                                );
                            }
                        }
                    }}
                    onBlur={e => this.handlerOnBlur(e)}
                />
            </section>
        )
    }
}
