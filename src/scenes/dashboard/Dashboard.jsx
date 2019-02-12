import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../task/Task';
import NullLenghtTasks from '../task/NullLenghtTasks';
import randomInteger from '../../config/helper';

import './css/dashboardStyle.css';
import './css/dashboardStyleForComp.css';

export const getTaskList = (tasks, props) => (tasks.length === 0 ? <NullLenghtTasks />
    : tasks.map(i => (
        <Task
            idTask={i.id}
            idList={props.idList}
            key={i.id}
            selected={i.selected}
            nameTask={i.name}
            actions={props.actions}
        />
    )));

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueNewTask: '',
        };
    }

    changeValueNewTask = e => this.setState({
        valueNewTask: e.target.value,
    });

    handlerOnBlur = (e) => {
        e.target.blur();
        this.setState({
            valueNewTask: e.target.value = '',
        });
    };

    render() {
        return (
            <section id={this.props.idList}>
                <article>
                    <input
                        type="text"
                        value={this.props.title}
                        className="titleName"
                        onChange={e => this.props.actions.updateTitleDashboard({
                            id: this.props.idList,
                            newTitle: e.target.value,
                        })
                        }
                        onBlur={(e) => {
                            if (e.target.value === '') {
                                e.target.value = 'New Title';
                            }
                            this.props.actions.onBlurs({ id: this.props.idList });
                        }}
                        onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                    />
                    <Link to={`/list/${this.props.idList}`}>
                        <div
                            className="linkList fa fa-external-link fa-2x"
                            title="open detailed information"
                        />
                    </Link>
                    <div
                        className="deleteBoadr fa fa-trash fa-2x"
                        onClick={() => this.props.actions.deleteDashboard({ id: this.props.idList })}
                        title="delete list"
                    />
                </article>
                <div className="taskLists" dropzone="move">
                    {getTaskList(this.props.tasks, this.props)}
                </div>
                <input
                    className="addNewTask"
                    placeholder="add to-do"
                    style={{ outline: 'none' }}
                    value={this.state.valueNewTask}
                    onChange={this.changeValueNewTask}
                    onKeyPress={e => (this.state.valueNewTask !== ''
                        ? (e.key === 'Enter'
                            ? (e.target.blur(), this.props.actions.addTask({
                                idDashboard: this.props.idList,
                                nameTask: this.state.valueNewTask,
                                idTask: `${randomInteger(1, 100000, this.props.toDoBoard)}`,
                            })
                            ) : false)
                        : false)
                    }
                    onBlur={e => this.handlerOnBlur(e)}
                />
            </section>
        );
    }
}
