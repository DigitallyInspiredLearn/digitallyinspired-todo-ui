import React, {Component} from 'react';
import plus from '../img/plus.png';
import cross from '../img/cross-out-mark.png';
import './sidebar.css';


export class Sidebar extends Component {

    render(){
        //  console.log("== sidebar props ===")
        //  console.log(this.props);
        return (
        <div>   
            <div 
                id = "plus" 
                onClick = {this.props.actions.showSidebar}
                >
                <img 
                    src = {plus} 
                    width = "60px" 
                    height = "60px" 
                    alt = "plus"
                />
            </div> 
            <div 
                className = {this.props.className}
                >
                <div 
                    id = "x-mark" 
                    onClick = {this.props.actions.hideSidebar}
                    >
                    <img 
                        src = {cross} 
                        width = "23px" 
                        height = "23px" 
                        alt = "cross"
                    />
                </div>
                <input 
                    type = "text" 
                    id = "add-title" 
                    placeholder = "Add title" 
                    value = {this.props.title}
                    onChange = {(e) => this.props.actions.addInputTitle(e.target.value)}
                />
                <input 
                    type = "text" 
                    id = "add-task" 
                    placeholder = "Add to-do" 
                    onChange = {(e) => this.props.actions.addInputTask(e.target.value)}
                />
                <div 
                    id="button-add" 
                    onClick={() => {this.props.actions.addDashboard({
                                            addTitle: this.props.title,
                                            addTask: this.props.task
                                        });
                                        this.props.actions.addInputTitle("");
                                        this.props.actions.addInputTask("");
                                        this.props.actions.hideSidebar();
                                    }
                        }
                    >
                    Add
                </div>
            </div>
        </div>
        );
    }
}
