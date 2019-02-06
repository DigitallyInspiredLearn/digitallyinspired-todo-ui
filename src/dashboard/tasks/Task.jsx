import React, {Component} from 'react';
import '../tasks/Task.css'
import del from "../../image/delete.PNG";

export class Task extends Component {
    render() {
        return (
                <div
                    className="tas"
                    id={this.props.id}
                >
                    <div
                        id={this.props.id}
                        className={this.props.selected ? "checkbox active" : "checkbox"}
                        onClick={(e) => this.props.toggleActive({e: e, idTask: this.props.id, idBox: this.props.idBox})}
                    >
                    </div>
                    <label className="label">{this.props.name}</label>
                    <div
                        id='DelTask'
                        className="fa fa-trash"
                        onClick={() => this.props.deleteTask({ idBox: this.props.idBox, idTask: this.props.id })}
                    />
                    <br/>
                </div>
        );
    }
}