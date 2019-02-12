import React, { Component } from 'react';
import './styleList.css';
import ReactDOMServer from 'react-dom/server';
// import jsPDF from 'jspdf';

import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from './duck';
import { actions as actionsBoard } from '../dashboard/duck';
import NullLenghtTasks from '../task/NullLenghtTasks';
import Task from '../task/Task';
import randomInteger from '../../config/helper';

class OneList extends Component {
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
        console.log(this.props);
        return (
            <div id="list">
                <div id="header">
                    <input
                        type="text"
                        value={this.props.data.todoListName}
                        className="titleName"
                        onChange={e => this.props.actionsBoard.updateTitleDashboard({
                            id: this.props.data.id,
                            newTitle: e.target.value,
                        })
                        }
                        onBlur={(e) => {
                            e.target.value === '' ? e.target.value = 'New Title' : -1;
                            this.props.actionsBoard.onBlurs({ id: this.props.match.params.id });
                            this.props.actions.fetchList(this.props.match.params.id);
                        }}
                        onKeyDown={e => (e.key === 'Enter' ? e.target.blur() : -1)}
                    />
                    <div
                        className="download fa fa-download fa-3x"
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
                <div className="searchTask">
                    <input type="text" placeholder="Search to-do" />
                    <div className="btnSearch fa fa-search fa-2x" />
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
                                    />
                                )))
                        }

                    </div>
                    <input
                        className="addNewTask"
                        placeholder="add to-do"
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

const mapStateToProps = state => (
    {
        data: state.list.data,
        todo: state.dashboard.toDoBoard,
    }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchList: actions.fetchList,
    }, dispatch),
    actionsBoard: bindActionCreators({
        updateTitleDashboard: actionsBoard.updateTitleDashboard,
        deleteDashboard: actionsBoard.deleteDashboard,
        deleteTask: actionsBoard.deleteTask,
        addTask: actionsBoard.addTask,
        updateCheckbox: actionsBoard.updateCheckbox,
        updateTaskName: actionsBoard.updateTaskName,
        onBlurs: actionsBoard.onBlurs,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(OneList);
