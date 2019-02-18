/* eslint-disable react/destructuring-assignment,
no-unused-expressions,react/no-access-state-in-setstate,react/prop-types */
import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
import plus from '../../../image/plus.svg';
import trash from '../../../image/trash.svg';

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoListName: '',
            displayStyle: 'none',
            tasks: [{ body: '', id: new Date().valueOf(), isComplete: false }],
            animation: '',
            bool: false,
            displayTrash: 'none',
        };
    }

    updateDisplayTrashVisible = () => this.setState({ displayTrash: 'flex' });

    updateDisplayTrashHide = () => this.setState({ displayTrash: 'none' });

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
        const taskValue = tasks === {} ? { body: 'ex', id: new Date().valueOf(), isComplete: false } : tasks;
        this.props.addNewDashboard({
            id: new Date().valueOf(),
            todoListName: titleValue,
            tasks: taskValue,
            userOwnerId: '0',
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
    };

    handlerOnClick = (e) => {
        e.target.blur();
        this.setState({
            todoListName: '',
            tasks: [{ body: '', id: new Date().valueOf(), isComplete: false }],
        });
    };

    handleAddInputTask = () => {
        this.setState({
            tasks: this.state.tasks.concat([{ body: '', id: new Date().valueOf(), isComplete: false }]),
        });
    };

    handleRemoveInputTask = i => () => {
        this.setState({
            tasks: this.state.tasks.filter((s, sidx) => i !== sidx),
        });
    };

    render() {
        const displayTrash = { display: this.state.displayTrash };
        return (
            [
                <div className="plus" onClick={this.updateDisplaySidebar}>
                    <img
                        id="myBtn "
                        src={plus}
                        alt="Plus"
                    />
                </div>,
                <div id="sidebar" style={{ display: this.state.displayStyle, zIndex: 50 }}>
                    <div
                        id="fon"
                        onClick={(e) => {
                            this.updateDisplaySidebar();
                            this.handlerOnClick(e);
                        }}
                    />
                    <aside id="addingArticle" style={{ animation: this.state.animation }}>
                        <span
                            className="window-close"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.handlerOnClick(e);
                            }}
                        >&times;
                        </span>
                        <input
                            type="text"
                            placeholder="Add title"
                            className="inputTitle"
                            value={this.state.todoListName}
                            onChange={this.changeValueTitle}
                        />
                        <div className="taskList">
                            {this.state.tasks.map((task, i) => (
                                <div
                                    className="addTask"
                                    onMouseOut={this.updateDisplayTrashHide}
                                    onMouseOver={this.updateDisplayTrashVisible}
                                >
                                    <input
                                        type="text"
                                        className="inputTask"
                                        placeholder={`Add ${i + 1} to-do`}
                                        value={task.name}
                                        onChange={this.changeValueName(i)}
                                    />
                                    <img
                                        src={trash}
                                        alt="Delete this task"
                                        onClick={this.handleRemoveInputTask(i)}
                                        className="small"
                                        style={displayTrash}
                                    />
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={this.handleAddInputTask}
                            className="btn"
                        >
                            Add one more task
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
