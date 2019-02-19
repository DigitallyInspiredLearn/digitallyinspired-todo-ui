/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Task from '../task/Task';
import NullLenghtTasks from '../task/NullLenghtTasks';
import trash from '../../image/trash.svg';
import info from '../../image/info.png';

import './css/dashboardStyle.css';
import './css/dashboardStyleForComp.css';

export const getTaskList = (tasks, props) => (tasks.length === 0 ? <NullLenghtTasks />
    : tasks.map(i => (
        <Task
            idTask={i.id}
            idList={props.idList}
            key={i.id}
            selected={i.isComplete}
            nameTask={i.body}
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
        const { valueNewTask } = this.state;
        const {
            idList, title, tasks, actions,
        } = this.props;

        return (
            <section id={idList}>
                <div className="icons">
                    <Link to={`/list/${idList}`}>
                        <img
                            src={info}
                            className="linkList"
                            alt="Information about this list"
                        />
                    </Link>
                    <img
                        src={trash}
                        className="deleteBoadr"
                        onClick={() => actions.deleteDashboard({ id: idList })}
                        alt="Delete this list"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={title}
                        className="titleName"
                        onChange={e => actions.updateTitleDashboard({
                            id: idList, newTitle: e.target.value,
                        })}
                        onBlur={(e) => {
                            e.target.value = e.target.value === '' && (e.target.value = 'New Title');
                            actions.updateTitleSuccess({ id: idList });
                        }}
                        onKeyDown={e => (e.key === 'Enter' && e.target.blur())}
                    />
                </div>
                <div className="taskLists" dropzone="move">
                    {getTaskList(tasks, this.props)}
                </div>
                <input
                    className="addNewTask"
                    placeholder="Add to-do"
                    style={{ outline: 'none' }}
                    value={valueNewTask}
                    onChange={this.changeValueNewTask}
                    onKeyPress={e => valueNewTask
                        && (e.key === 'Enter'
                            && (e.target.blur(), actions.addTask({
                                idDashboard: idList, nameTask: valueNewTask,
                            })))
                    }
                    onBlur={this.handlerOnBlur}
                />
            </section>
        );
    }
}
