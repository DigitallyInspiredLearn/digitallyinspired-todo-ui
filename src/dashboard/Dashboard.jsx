import React, { Component } from 'react';
import trash from '../img/trash.png';
import info from '../img/info.png';
import './dashboard.css';
import { Task } from '../task/Task';
import { Link } from 'react-router-dom';

export class Dashboard extends Component {

    render() {
        // console.log("=== Dashboard props ===")
        // console.log(this.props);
        return (
        <div className="block-item" id={this.props.dashboard_id}>
            <div className="images">
                <Link to = {`/${this.props.dashboard_id}`}
                    >
                    <div 
                        className = "info-icon"
                        
                        >
                        <img 
                            src = {info}
                            width = "21px"
                            height = "21px"
                            alt = "info"
                        />
                    </div>
                </Link>
                <div 
                    className="trash-icon"
                    onClick={() => this.props.actions.deleteDashboard(this.props.dashboard_id)}
                    >
                    <img 
                        src={trash} 
                        width="19px" 
                        height="20px" 
                        alt="trash"
                    />
                </div>
            </div>
            <br/>
            <input 
                className="item-name" 
                value={this.props.title}
                onChange={(e) => this.props.actions.changeDashboardTitle({id: this.props.dashboard_id, newTitle: e.target.value})}
            />
                          
            <div className="tasks">
              {this.props.tasks.map(task => 
                <Task 
                    actions = {this.props.actions}
                    key = {task.task_id}
                    task_id = {task.task_id}
                    name = {task.name}
                    selected = {task.selected} 
                    dashboard_id = {this.props.dashboard_id}
                />
              )}
            </div>

            <input 
                className="add-todo" 
                placeholder="Add to-do" 
                onBlur = {(e) => {
                        if(e.target.value !== ''){
                            this.props.actions.addTask({id: this.props.dashboard_id, task: e.target.value}); 
                            e.target.value="" 
                        }
                    }
                }
                onKeyPress = {(e) => {
                        if (e.key === 'Enter' && e.target.value !== '') {
                            this.props.actions.addTask({id: this.props.dashboard_id, task: e.target.value});
                            e.target.value = "";
                        }
                    }
                }
                
            />
        </div> 
        );
    }
}
