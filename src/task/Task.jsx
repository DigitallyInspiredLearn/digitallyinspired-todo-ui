import React, { Component } from 'react';
import trash from '../img/trash.png';
import './task.css';

export class Task extends Component{
    state = {
        value: this.props.name,
        isChecked: this.props.selected,
    }  

    
    
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render(){
        return (
            <div 
                className="task" 
                task_id={this.props.box_id}
            >
                <input 
                    type="checkbox"  
                    checked={this.state.isChecked}
                    onChange={this.toggleChange}
                    
                />
                
                
                    <input 
                        className="task-name" 
                        type="text" 
                        value={this.state.value}
                        disabled = {this.state.isChecked === true ? "disabled" : ""} 
                        onChange={this.changeValue}
                        onBlur={(e)=> this.props.changeTask(this.props.dashboard_id,this.props.task_id,e.target.value)}
                /><br/>
                <div 
                    className="delete-task" 
                    onClick={()=> this.props.deleteTask(this.props.dashboard_id, this.props.task_id)}
                ><img src={trash} width="19px" height="19px" alt="trash"/></div>
                
            </div>
        );
    }
}