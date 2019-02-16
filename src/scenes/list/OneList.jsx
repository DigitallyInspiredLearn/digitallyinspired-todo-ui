import React, {Component} from 'react';
import './styleList.css';
import ReactDOMServer from 'react-dom/server';
import NullLenghtTasks from '../task/NullLenghtTasks';
// import Task from '../task/Task';
import TaskForList from './tasksForList/TaskForList'
import randomInteger from '../../config/helper';
import {Link} from 'react-router-dom'

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
                         <Link to='/lists'>
                        <div
                            className='back fa fa-arrow-left fa-2x'
                        />
                        </Link>
                        <Link to='/lists'>
                        <div
                            className="deleteList fa fa-trash fa-2x"
                            id={this.props.match.params.id}
                            onClick={() => {
                                this.props.actions.deleteList(this.props.match.params.id);
                            }
                            }
                        />
                        </Link>
                        <div
                            className="download fa fa-download fa-2x"
                            title="download"
                            onClick={() => {
                                const link = document.createElement('a');
                                const file = new Blob(
                                    [ReactDOMServer.renderToStaticMarkup(this.render())],
                                    {type: 'text/html'},
                                );
                                link.href = URL.createObjectURL(file);
                                link.download = 'List.html';
                                link.click();
                                // const pdf = new jsPDF();
                                // pdf.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
                                // pdf.save('List.pdf');
                            }}
                        />
                    </span>
                    <input
                        type="text"
                        value={this.props.data.todoListName}
                        className="titleNameOneList"
                        onChange={e => {
                            this.props.actions.updateTitleList({
                                id: this.props.data.id,
                                newTitle: e.target.value,
                            });
                        }
                        }
                        // onBlur={(e) => {
                        //     e.target.value === '' ? e.target.value = 'New Title' : -1;
                        //     this.props.actionsBoard.onBlurs({id: this.props.match.params.id});
                        //     //this.props.actions.fetchList(this.props.match.params.id);
                        // }}
                        //onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                    />
                </div>
                <div className="searchTask">
                    <input
                        type="text"
                        placeholder="Search to-do"
                        onChange={(e) => this.props.actions.changeSearch({
                            idDashboard: this.props.match.params.id,
                            search: e.target.value
                        })}
                    />
                    <div className="btnSearch fa fa-search fa-2x"
                         style={{
                             backgroundColor: 'inherit',
                             color: 'lightgrey',
                             width: 'auto',
                             paddingRight: '15px'
                         }}
                    />
                </div>
                <article className="blockTask">
                    <div>
                        {
                            this.props.data.tasks && (this.props.data.tasks.length === 0 ? <NullLenghtTasks/>
                                : this.props.data.tasks.map(i => (
                                    <TaskForList
                                        idTask={i.id}
                                        idList={this.props.match.params.id}
                                        key={i.id}
                                        selected={i.isComplete}
                                        nameTask={i.body}
                                        actions={this.props.actionsBoard}
                                        fetchList={this.props.actions.fetchList}
                                        updateTaskList={this.props.actions.updateTaskList}
                                        deleteTaskList={this.props.actions.deleteTaskList}
                                    />
                                )))
                        }

                    </div>
                    <input
                        className="addNewTask"
                        placeholder="Add to-do"
                        style={{outline: 'none', fontSize: '20px', marginLeft: '15px'}}
                        value={this.state.valueNewTask}
                        onChange={this.changeValueNewTask}
                        onKeyPress={event => {
                            if (event.key === 'Enter') {
                                this.props.actions.addTaskList({
                                    idDashboard: this.props.match.params.id,
                                    nameTask: this.state.valueNewTask,
                                    idTask: `${randomInteger(1, 100000, this.props.todo)}`,
                                });
                                this.state.valueNewTask = "";
                                //this.props.actions.fetchList(this.props.match.params.id);
                            }
                        }
                        }
                        // onBlur={(e) => {
                        //     this.handlerOnBlur(e);
                        //     this.props.actions.fetchList(this.props.match.params.id);
                        // }}
                    />
                </article>
            </div>
        );
    }
}