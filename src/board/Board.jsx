import React, { Component } from 'react';
import trash from '../img/trash.png';
import info from '../img/info.png';
import './board.css';
import { Task } from '../task/Task';
import { connect } from 'react-redux';
import { actions } from './board_duck';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

export class Board extends Component {

    componentWillMount() {
        this.props.fetchBoard(this.props.match.params.id);
    }
    render() {
         console.log("=== Board props ===")
         console.log(this.props.match.params.id);
        return (
        <div className="board" id={this.props.dashboard_id}>
            <div className="board-images">
            
                <div 
                    className="trash-icon"
                    onClick={() => this.props.deleteDashboard(this.props.dashboard_id)}
                    >
                    <img 
                        src={trash} 
                        width="25px" 
                        height="25px" 
                        alt="trash"
                    />
                </div>
            </div>
            <br/>
            <input 
                className="board-name" 
                value= "title"
                //onChange={(e) => this.props.changeDashboardTitle({id: this.props.dashboard_id, newTitle: e.target.value})}
            />
                          
            <div className="board-tasks">
              {/* {this.props.tasks.map(task => 
                <Task 
                    key = {task.task_id}
                    task_id = {task.task_id}
                    name = {task.name}
                    selected = {task.selected} 
                    deleteTask = {this.props.deleteTask}
                    changeTaskName = {this.props.changeTaskName}
                    changeTaskSelected = {this.props.changeTaskSelected}
                    dashboard_id = {this.props.dashboard_id}
                />
              )} */
              <Task
                  name = "description"
              />}
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
                //             this.props.addTask({id: this.props.dashboard_id, task: e.target.value});
                //             e.target.value = "";
                //         }
                //     }
                // }
                
            />
        </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = {

    fetchBoard: actions.fetchBoard,
};

export default compose(
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)
(Board);