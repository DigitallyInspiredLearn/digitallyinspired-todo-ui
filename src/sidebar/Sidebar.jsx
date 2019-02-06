import React, {Component} from 'react';
import '../sidebar/Sidebar.css'
import plus from "../image/plus.PNG";

export class Sidebar extends Component {

    render() {
        return ([<div className="plus">
                <img
                    id="myBtn"
                    src={plus}
                    alt="Plus"
                    onClick={() => this.props.actions.showSidebar(true)}
                />
            </div>,
                <div
                    id="myModal"
                    className={this.props.display ? "modal active" : "modal"}
                >
                    <div className="modal-content">
                    <span
                        className="close"
                        onClick={() => this.props.actions.closeSidebar(false)}
                    >
                        &times;
                    </span>
                        <form>
                            <div className="addForm">
                                <input
                                    type="text"
                                    placeholder="Add title"
                                    id="newTitle"
                                    value={this.props.title}
                                    onChange={(e) => this.props.actions.changeTitles(e.target.value)}
                                    style={{fontSize: "24px"}}
                                />
                                <input
                                    type="text"
                                    placeholder="Add to-do"
                                    id="task"
                                    value={this.props.task}
                                    onChange={(e) => this.props.actions.changeTask(e.target.value)}
                                />
                            </div>
                            <div className="addBut">
                                <div
                                    id="addBut"
                                    onClick={() => {
                                        this.props.actions.addNewDashboard({
                                            newTitle: this.props.title,
                                            idTask: '',
                                            newTask: this.props.task,
                                            selected: false
                                        });
                                        this.props.actions.closeSidebar();
                                        this.props.actions.changeTitles("");
                                        this.props.actions.changeTask("");
                                    }
                                    }
                                >
                                    Add
                                </div>
                            </div>
                        </form>
                    </div>
                </div>]

        )
    }
}
