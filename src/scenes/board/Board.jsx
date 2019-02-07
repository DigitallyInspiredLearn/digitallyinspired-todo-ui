import React, { Component } from 'react';
import trash from '../../img/trash.png';
import './board.css';
import { Task } from '../task/Task';
import { Link } from 'react-router-dom';

export class Board extends Component {

    componentWillMount() {
        this.props.actions.fetchBoard(this.props.match.params.id);
    }

    render() {
         console.log("=== Mylist props ===")
         console.log(this.props)
        return (
        <div className="board" id={this.props.dashboard_id}>
            <div className="board-images">
                
                <div 
                    className="trash-icon"
                    
                    >
                    
                    <img 
                        src={trash} 
                        width="25px" 
                        height="25px" 
                        alt="trash"
                        onClick={() => {this.props.actions.deleteDashboard(this.props.match.params.id); } }
                    />
                    
                    
                </div>
                
            </div>
            <br/>
            <input 
                className="board-name" 
                value= {this.props.oneList.title}
                onChange={(e) => this.props.actions.changeDashboardTitle({id: this.props.match.params.id, newTitle: e.target.value})}
            />
                          
            <div className="board-tasks">
              
                
                
            {this.props.oneList.tasks && this.props.oneList.tasks.map(task => 
                <Task 
                    key = {task.task_id}
                    task_id = {task.task_id}
                    name = {task.name}
                    selected = {task.selected} 
                    actions = {this.props.actions}
                    dashboard_id = {this.props.match.params.id}
                />
              )}
            </div>

            <input 
                className="board-add-todo" 
                placeholder="Add to-do" 
                // onBlur = {(e) => {
                //         if(e.target.value !== ''){
                //             this.props.addTask({id: this.props.dashboard_id, task: e.target.value}); 
                //             e.target.value="" 
                //         }
                //     }
                // }
                // onKeyPress = {(e) => {
                //         if (e.key === 'Enter' && e.target.value !== '') {
                //             this.props.actions.addTask({id: this.props.dashboard_id, task: e.target.value});
                //             e.target.value = "";
                //         }
                //     }
                // }
                
            />
        </div> 
        );
    }
}

