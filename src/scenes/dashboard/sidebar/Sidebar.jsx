import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
// import randomInteger from '../../../config/helper';
const uuid = require('uuid');

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            displayStyle: 'none',
            tasks: [{ id: uuid(), name: '', selected: false }],
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
        const taskValue = tasks === {} ? { id: uuid(), name: 'ex', selected: false } : tasks;
        // console.log(titleValue)
        // console.log(taskValue)
        this.props.addNewDashboard({
            title: titleValue,
            tasks: taskValue,
        });
    };

    changeValuetitle = e => this.setState({
        title: e.target.value,
    });

    changeValuename = i => (e) => {
        const newTaskHolders = this.state.tasks.map((task, sidx) => {
            if (i !== sidx) return task;
            return { ...task, name: e.target.value };
        });
        this.setState({ tasks: newTaskHolders });
    }

    handlerOnClick = (e) => {
        e.target.blur();
        this.setState({
            title: '',
            tasks: [{ name: '' }],
        });
    };

    handleAddShareholder = () => {
        this.setState({
            tasks: this.state.tasks.concat([{ id: uuid(), name: '', selected: false }]),
        });
    };

    handleRemoveShareholder = i => () => {
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
                            value={this.state.title}
                            onChange={this.changeValuetitle}
                        />
                        <div className="taskList">
                            {this.state.tasks.map((task, i) => (
                                <div className="addTask">
                                    <input
                                        type="text"
                                        className="inputTask"
                                        placeholder={`Add to-do #${i + 1}`}
                                        value={task.name}
                                        onChange={this.changeValuename(i)}
                                    />
                                    <button
                                        type="button"
                                        onClick={this.handleRemoveShareholder(i)}
                                        className="small"
                                    >
                                        -
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button
                            type="button"
                            onClick={this.handleAddShareholder}
                            className="btn"
                        >
                            Add Shareholder
                        </button>
                        <button
                            className="addListBtn"
                            type="submit"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.addBoard(
                                    this.state.title,
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
