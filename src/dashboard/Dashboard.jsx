import React, { Component } from 'react';
import trash from '../img/trash.png';
import './dashboard.css';
import {Task} from '../task/Task';

export class Dashboard extends Component {

    state = {
        value: this.props.title
    };

    changeValue = (e) => {
        this.setState({
            value: e.target.value
        })
    };

    render() {
        return (
        <div className="block-item" id={this.props.dashboard_id}>
            <div 
                className="trash-icon"
                onClick={()=> this.props.deleteDashboard(this.props.dashboard_id)}
                >
                <img 
                    src={trash} 
                    width="19px" 
                    height="19px" 
                    alt="trash"
                />
            </div><br/>
            <input 
                className="item-name" 
                value={this.state.value} 
                onChange={this.changeValue}
                onBlur={(e) => this.props.changeDashboardTitle(this.props.dashboard_id,e.target.value)}
            />
                          
            <div className="tasks">
              {this.props.tasks.map(task => 
                <Task 
                    key = {task.task_id}
                    task_id={task.task_id}
                    name={task.name}
                    selected={task.selected} 
                    deleteTask = {this.props.deleteTask}
                    changeTask = {this.props.changeTask}
                    dashboard_id = {this.props.dashboard_id}
                />
              )}
            </div>

            <input 
                className="add-todo" 
                placeholder="Add to-do" 
                onBlur = {(e) => this.props.addTask(this.props.dashboard_id, e)}
            />
        </div> 
        );
    }
}