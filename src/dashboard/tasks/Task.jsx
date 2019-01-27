import React, {Component} from 'react';
import del from "../../image/delete.PNG";
import '../tasks/Task.css'

export class Task extends Component{
    render() {
        return (
            <div className="form" id="form">
                <div className="tas" id={this.props.id}>
                    <div
                        id={this.props.id}
                        className={this.props.selected ? "active" : "checkbox"}
                        onClick={(e) => this.props.toggleActive(e, this.props.id)}
                    >
                    </div>
                    <label className="label">{this.props.name}</label>
                    <img
                        className="deleteTask"
                        src={del}
                        alt="Delete"
                        onClick={() => this.props.deleteTask(this.props.idBox, this.props.id)}
                    />
                    <br/>
                </div>
            </div>
        );
    }
}