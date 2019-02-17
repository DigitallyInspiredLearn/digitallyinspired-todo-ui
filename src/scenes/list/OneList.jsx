import React, { Component } from 'react';
import './styleList.css';
import ReactDOMServer from 'react-dom/server';
import { Link } from 'react-router-dom';
import NullLenghtTasks from '../task/NullLenghtTasks';
import Task from '../task/Task';
import randomInteger from '../../config/helper';

export class OneList extends Component {
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

    componentWillMount = () => this.props.actions.fetchList(this.props.match.params.id);

    render() {
        return (
            <div id="list">
                <div id="header">
                    <span className="spList">
                        <div id="backEndTitle">
                            <Link to="/lists">
                                <div
                                    className="back fa fa-arrow-left fa-2x"
                                />
                            </Link>
                            <input
                                type="text"
                                value={this.props.data.todoListName}
                                className="titleNameOneList"
                                onChange={(e) => {
                                    this.props.actions.updateTitleList({
                                        id: this.props.data.id,
                                        newTitle: e.target.value,
                                    });
                                    this.props.actionsBoard.updateTitleDashboard({
                                        id: this.props.data.id,
                                        newTitle: e.target.value,
                                    });
                                }
                                }
                                onBlur={(e) => {
                                    e.target.value === '' ? e.target.value = 'New Title' : -1;
                                    this.props.actionsBoard.onBlurs({ id: this.props.match.params.id });
                                    this.props.actions.fetchList(this.props.match.params.id);
                                }}
                                onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                            />
                        </div>
                        <div>
                            <Link to="/lists">
                                <div
                                    className="deleteList fa fa-trash fa-2x"
                                    // id={this.props.data.idList}
                                    // onClick={() => this.props.actions.deleteDashboard(this.props.data.idList)}
                                />
                            </Link>
                            <div
                                className="download fa fa-download fa-2x"
                                title="download"
                                onClick={() => {
                                    const link = document.createElement('a');
                                    const file = new Blob(
                                        [ReactDOMServer.renderToStaticMarkup(this.render())],
                                        { type: 'text/html' },
                                    );
                                    link.href = URL.createObjectURL(file);
                                    link.download = 'List.html';
                                    link.click();
                                // const pdf = new jsPDF();
                                // pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
                                // pdf.save('List.pdf');
                                }}
                            />
                        </div>
                    </span>
                </div>
                <div className="searchTask">
                    <input
                        type="text"
                        placeholder="Search to-do"
                        onChange={e => this.props.actions.changeSearch({
                            idDashboard: this.props.match.params.id,
                            search: e.target.value,
                        })}
                    />
                    <div
                        className="btnSearch fa fa-search fa-2x"
                        style={{
                            backgroundColor: 'inherit',
                            color: 'lightgrey',
                            width: 'auto',
                            paddingRight: '15px',
                        }}
                    />
                </div>
                <article className="blockTask">
                    <div>
                        {
                            this.props.data.tasks && (this.props.data.tasks.length === 0 ? <NullLenghtTasks />
                                : this.props.data.tasks.map(i => (
                                    <Task
                                        idTask={i.id}
                                        idList={this.props.match.params.id}
                                        key={i.id}
                                        selected={i.isComplete}
                                        nameTask={i.body}
                                        actions={this.props.actionsBoard}
                                        fetchList={this.props.actions.fetchList}
                                        updateTaskList={this.props.actions.updateTaskList}
                                    />
                                )))
                        }

                    </div>
                    <input
                        className="addNewTask"
                        placeholder="Add to-do"
                        style={{ outline: 'none', fontSize: '20px', marginLeft: '15px' }}
                        value={this.state.valueNewTask}
                        onChange={this.changeValueNewTask}
                        onKeyPress={e => (this.state.valueNewTask !== ''
                            ? (e.key === 'Enter'
                                ? (e.target.blur(), this.props.actionsBoard.addTask({
                                    idDashboard: this.props.match.params.id,
                                    nameTask: this.state.valueNewTask,
                                    idTask: `${randomInteger(1, 100000, this.props.todo)}`,
                                })
                                ) : false)
                            : false)
                        }
                        onBlur={(e) => {
                            this.handlerOnBlur(e);
                            this.props.actions.fetchList(this.props.match.params.id);
                        }}
                    />
                </article>
            </div>
        );
    }
}
