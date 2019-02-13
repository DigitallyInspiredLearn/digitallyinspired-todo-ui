import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';

const uuid = require('uuid');

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListName: '',
            displayStyle: 'none',
            tasks: [{ body: '', id: uuid(), isComplete: false }],
            animation: '',
            bool: false,
        };
    }

    updateDisplaySidebar = () => {
        this.state.bool === false
            ? this.setState({
                displayStyle: 'flex',
                animation: 'move 1s',
            })
            : this.setState({
                displayStyle: 'none',
                animation: '',
            });
        this.setState({
            bool: !this.state.bool,
        });
    };

    addBoard = (title, tasks) => {
        const titleValue = title === '' ? 'Dashboard' : title;
        const taskValue = tasks === {} ? { body: 'ex', id: uuid(), isComplete: false } : tasks;
        this.props.addNewDashboard({
            todoListName: titleValue,
            tasks: taskValue,
        });
    };

    changeValueTitle = e => this.setState({
        todoListName: e.target.value,
    });

    changeValueName = i => (e) => {
        const newTaskHolders = this.state.tasks.map((task, sidx) => {
            if (i !== sidx) return task;
            return { ...task, body: e.target.value };
        });
        this.setState({ tasks: newTaskHolders });
    }

    handlerOnClick = (e) => {
        e.target.blur();
        this.setState({
            todoListName: '',
            tasks: [{ body: '' }],
        });
    };

    handleAddInputTask = () => {
        this.setState({
            tasks: this.state.tasks.concat([{ body: '', id: uuid(), isComplete: false }]),
        });
    };

    handleRemoveInputTask = i => () => {
        this.setState({
            tasks: this.state.tasks.filter((s, sidx) => i !== sidx),
        });
    };

    render() {
        return (
            [
                <div className="addNewArticleButton" onClick={this.updateDisplaySidebar}>+</div>,
                <div id="sidebar" style={{ display: this.state.displayStyle }}>
                    <div
                        id="fon"
                        onClick={(e) => {
                            this.updateDisplaySidebar();
                            this.handlerOnClick(e);
                        }}
                    />
                    <aside id="addingArticle" style={{ animation: this.state.animation }}>
                        <h4
                            className="window-close"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.handlerOnClick(e);
                            }}
                        >✕
                        </h4>
                        <input
                            type="text"
                            placeholder="Add title"
                            className="inputTitle"
                            value={this.state.todoListName}
                            onChange={this.changeValueTitle}
                        />
                        <div className="taskList">
                            {this.state.tasks.map((task, i) => (
                                <div className="addTask">
                                    <input
                                        type="text"
                                        className="inputTask"
                                        placeholder={`Add to-do #${i + 1}`}
                                        value={task.name}
                                        onChange={this.changeValueName(i)}
                                    />
                                    <button
                                        type="button"
                                        onClick={this.handleRemoveInputTask(i)}
                                        className="small"
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={this.handleAddInputTask}
                            className="btn"
                        >
                            Add Another Task
                        </button>
                        <button
                            className="addListBtn"
                            type="submit"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.addBoard(
                                    this.state.todoListName,
                                    this.state.tasks,
                                );
                                this.handlerOnClick(e);
                            }}
                        >Add
                        </button>
                    </aside>
                </div>,
            ]
        );
    }
}

export default Sidebar;
