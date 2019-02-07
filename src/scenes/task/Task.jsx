import React, { Component } from 'react';
import trash from '../../img/trash.png';
import './task.css';

export class Task extends Component{
    render(){
        //  console.log("=== task props ===")
        //  console.log(this.props)
        return (
            <div 
                className = "task" 
                id = {this.props.task_id}
                >
                <input 
                    type = "checkbox"  
                    checked = {this.props.selected}
                    onChange = {(e) => this.props.actions.changeTaskSelected({dashboard_id: this.props.dashboard_id, task_id: this.props.task_id, selected: e.target.checked})} 
                />
                
                <input 
                    className = "task-name" 
                    type = "text" 
                    value = {this.props.name}
                    disabled = {this.props.selected === true ? "disabled" : ""} 
                    onChange = {(e) => this.props.actions.changeTaskName({dashboard_id: this.props.dashboard_id, task_id: this.props.task_id, name: e.target.value})}
                    /*onKeyPress = {(e) => {
                        if(e.key === 'Enter') {
                            this.props.changeTaskName({dashboard_id: this.props.dashboard_id, task_id: this.props.task_id, name: e.target.value})
                        }
                        }
                    }
                    */
                />

                <br/>
                <div 
                    className = "delete-task" 
                    onClick = {() => this.props.actions.deleteTask({dashboard_id: this.props.dashboard_id, task_id: this.props.task_id})}
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