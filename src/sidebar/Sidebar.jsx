import React, { Component } from 'react';
import '../sidebar/Sidebar.css'

export class Sidebar extends Component {

    render() {
        return (
            <div
                id="myModal"
                className={this.props.display ? "modal active" : "modal"}
            >
                <div className="modal-content">
                    <span
                        className="close"
                        onClick={() => this.props.closeSidebar(false)}
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
                                onChange={(e) => this.props.changeTitle(e.target.value)}
                                style={{fontSize: "24px"}}
                            />
                            <input
                                type="text"
                                placeholder="Add to-do"
                                id="task"
                                value={this.props.task}
                                onChange={(e) => this.props.changeTask(e.target.value)}
                            />
                        </div>
                        <div className="addBut">
                            <div
                                id="addBut"
                                onClick={() => {
                                    this.props.addNewDashboard(this.props.title, this.props.task);
                                    this.props.changeTitle("");
                                    this.props.changeTask("");
                                }
                                }
                            >
                                Add
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}