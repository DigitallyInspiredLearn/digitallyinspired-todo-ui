import React, { Component } from 'react';
import trash from '../../img/trash.png';
import './task.css';

export class Task extends Component{
    state = {
        isChecked: this.props.selected,
    }  

    render(){
        return (
            <div 
                className = "task" 
                id = {this.props.task_id}
                >
                <input 
                    type = "checkbox"  
                    checked = {this.props.selected}
                    onChange = {(e) => this.props.changeTaskSelected(this.props.dashboard_id,this.props.task_id,e.target.checked)} 
                />
                
                <input 
                    className="task-name" 
                    type="text" 
                    value={this.props.name}
                    disabled = {this.props.selected === true ? "disabled" : ""} 
                    onChange={(e) => this.props.changeTaskName(this.props.dashboard_id, this.props.task_id, e.target.value)}
                />

                <br/>
                <div 
                    className = "delete-task" 
                    onClick = {() => this.props.deleteTask(this.props.dashboard_id, this.props.task_id)}
                    >
                    <img 
                    src = {trash} 
                    width = "19px" 
                    height = "19px" 
                    alt = "trash"
                /></div>
            </div>
        );
    }
}