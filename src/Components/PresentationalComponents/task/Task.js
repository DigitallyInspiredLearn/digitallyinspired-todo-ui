import React, {Component} from 'react';
import './css/taskStyle.css'

export class Task extends Component{
    render(){
        return(
            <div
                className="tasks"
                id= { this.props.idTask }
            >
                <div
                    className="taskDiv"
                    style={{display: "flex", width:"100%", flexDirection:"row"}} >
                    <div
                        className={this.props.selected===false?'unselected': 'fa fa-check-square'}
                        style={{zIndex:5}}
                        onClick={() => this.props.onChangeCheckbox(this.props.idList, this.props.idTask,this.props.selected)}
                    />
                    <input
                        type="text"
                        value={this.props.nameTask}
                        className="taskName"
                        style={{width: "100%",textOverflow:" ellipsis",zIndex:5}}
                        onChange={(e) => {
                            this.props.onChangeNameTask(
                                this.props.idList,
                                this.props.idTask,
                                e.target.value,
                            );
                        }
                        }
                    />
                    <label
                        className="deleteTask fa fa-trash"
                        style={{display:"flex",zIndex:5}}
                        onClick={() => this.props.delTask( this.props.idList, this.props.idTask)}
                    />
                </div>
            </div>
        )
    }
}
