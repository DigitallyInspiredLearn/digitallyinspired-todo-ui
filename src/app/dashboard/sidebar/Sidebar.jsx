import React, {Component} from 'react';
import './css/siderStyle.css';
import './css/siderStyleForComp.css';
import {randomInteger} from "../../helper";

export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titleName: '',
            taskName: '',
            displayStyle: 'none',
            animation: '',
            bool: false
        };
    }

    updateDisplaySidebar = () => {
        this.state.bool === false ?
            this.setState({
                displayStyle: 'flex',
                animation: 'move 1s',
            })
            : this.setState({
                displayStyle: 'none',
                animation: '',
            });
        this.setState({
            bool: !this.state.bool
        })
    };

    addBoard = (title, idBoard, taskName, idTask) => {
        let titleValue = title === '' ? title = 'New Title Dashboard' : title;
        let taskValue = taskName === '' ? taskName = 'new do-to' : taskName;
        this.props.addNewDashboard({
            title: titleValue,
            tasks: [{
                id: `${idTask}`,
                name: taskValue,
                selected: false
            }]
        });
    };

    changeValueTitleName = (e) => this.setState({
        titleName: e.target.value
    });
    changeValueTaskName = (e) => this.setState({
        taskName: e.target.value
    });

    handlerOnClisk = (e) => {
        e.target.blur();
        this.setState({
            titleName: e.target.value = '',
            taskName: e.target.value = ''
        })
    };

    render() {
        return (
            [
                <div className="addNewArticleButton" onClick={this.updateDisplaySidebar}>+</div>,
                <div id="sidebar" style={{display: this.state.displayStyle}}>
                    <div
                        id="fon"
                        onClick={e => {
                            this.updateDisplaySidebar();
                            this.handlerOnClisk(e)
                        }}
                    />
                    <aside id="addingArticle" style={{animation: this.state.animation}}>
                        <h4 className="window-close"
                            onClick={e => {
                                this.updateDisplaySidebar();
                                this.handlerOnClisk(e)
                            }}
                        >✕
                        </h4>
                        <input
                            type="text"
                            placeholder="Add title"
                            id="newTitle"
                            defaultValue={this.state.titleName}
                            onChange={this.changeValueTitleName}
                        />
                        <div className="taskList">
                            <input
                                type="text"
                                placeholder=" Add to-do"
                                className="newTask"
                                id="mainInput"
                                defaultValue={this.state.taskName}
                                onInput={this.changeValueTaskName}
                            />
                        </div>
                        <button
                            className="addListBtn"
                            type="submit"
                            onClick={(e) => {
                                this.updateDisplaySidebar();
                                this.addBoard(
                                    this.state.titleName,
                                    `${randomInteger(1, 100000, this.props.toDoBoard)}`,
                                    this.state.taskName,
                                    `${randomInteger(1, 100000, this.props.toDoBoard)}`
                                );
                                this.handlerOnClisk(e);
                            }}
                        >Add
                        </button>
                    </aside>
                </div>
            ]
        )
    }
}