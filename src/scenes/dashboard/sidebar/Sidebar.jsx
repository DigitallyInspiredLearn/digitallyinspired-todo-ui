/* eslint-disable */
import React, { Component } from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
import randomInteger from '../../../config/helper';
const uuid = require('uuid');

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName: '',
            displayStyle: 'none',
            tasks: [{ id: uuid(), body: '', isComplete: false }],
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
        const titleValue = title === '' ? 'New Title Dashboard' : title;
        //const taskValue = body === '' ? 'new do-to' : body;
        //const tasks = this.state.tasks;
        console.log(title)
        console.log(tasks)
        const newDashboard = {
            
        };
        this.props.addNewDashboard({
            todoListName: titleValue,
            tasks: tasks,
        });
    };

    changeValueTitleName = e => this.setState({
        titleName: e.target.value,
    });

    changeValuebody = i => e => {

        const newTaskHolders = this.state.tasks.map((task, sidx) => {
            if (i !== sidx) return task;
            return { ...task, body: e.target.value };
          });
      
        this.setState({ tasks: newTaskHolders });
    }

    handlerOnClick = (e) => {
        e.target.blur();
        this.setState({
            titleName: '',
            tasks: [{ id: uuid(), body: '', isComplete: false }],
        });
    };

    handleAddShareholder = () => {
        this.setState({
          tasks: this.state.tasks.concat([{ id: uuid(), body: '', isComplete: false }])
        });
    };

    handleRemoveShareholder = idx => () => {
        this.setState({
          tasks: this.state.tasks.filter((s, sidx) => idx !== sidx)
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
                            value={this.state.titleName}
                            onChange={this.changeValueTitleName}
                        />
                        <div className="taskList">
                            {this.state.tasks.map((task, i) => (
                                <div className="addTask">
                                    <input
                                        type="text"
                                        className="inputTask"
                                        placeholder={`Add to-do #${i + 1}`}
                                        value={task.body}
                                        onChange={this.changeValuebody(i)}
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
                                    this.state.titleName,
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
