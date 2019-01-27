import React, {Component} from 'react';
import '../sidebar/Sidebar.css'


export class Sidebar extends Component {
    state = {
        inputTitle: "",
        inputTask: ""
    };

    changeTitle = (value) => {
        this.setState(
            {
                inputTitle: value
            }
        );
    };

    changeTask = (value) => {
        this.setState(
            {
                inputTask: value
            }
        );
    };

    render() {
        return (
            <div
                id="myModal"
                className="modal"
                style={{display: this.props.display}}
            >
                <div className="modal-content">
                    <span
                        className="close"
                        onClick={() => this.props.closeSidebar()}
                    >
                        &times;
                    </span>
                    <form>
                        <div className="addForm">
                            <input
                                type="text"
                                placeholder="Add title"
                                id="newTitle"
                                value={this.state.inputTitle}
                                onChange={(e) => this.changeTitle(e.target.value)}
                                style={{fontSize: "24px"}}
                            />
                            <input
                                type="text"
                                placeholder="Add to-do"
                                id="task"
                                value={this.state.inputTask}
                                onChange={(e) => this.changeTask(e.target.value)}
                            />
                        </div>
                        <div className="addBut">
                            <div
                                id="addBut"
                                onClick={() => {
                                    this.props.addNewDashboard(this.state.inputTitle, this.state.inputTask);
                                    this.changeTitle("");
                                    this.changeTask("")
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