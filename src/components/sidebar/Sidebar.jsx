import React, {Component} from 'react';
import plus from '../../img/plus.png';
import cross from '../../img/cross-out-mark.png';
import './sidebar.css';

export class Sidebar extends Component {

    state = {
        title: "",
        task: "",
        className: "block-add",
    };

    inputTitle = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    inputTask = (e) => {
        this.setState({
            task: e.target.value
        });
    }

    showSidebar = () => {
        this.setState({
            className: "block-add current",
        });
    }

    hideSidebar = () => {
        this.setState({
            className: "block-add",
        });
    }

    render(){
        return (
        <div>   
            <div 
                id = "plus" 
                onClick = {this.showSidebar}
                >
                <img 
                    src = {plus} 
                    width = "60px" 
                    height = "60px" 
                    alt = "plus"
                />
            </div> 
            <div 
                className = {this.state.className}
                >
                <div 
                    id = "x-mark" 
                    onClick = {this.hideSidebar}
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
                    onChange = {(e) => this.inputTask(e)}
                />
                <input 
                    type = "text" 
                    id = "add-task" 
                    placeholder = "Add to-do" 
                    onChange = {(e) => this.inputTitle(e)}
                />
                <div 
                    id="button-add" 
                    onClick={() => {this.props.addDashboard(this.state.title, this.state.task); this.hideSidebar()}}
                    >
                    Add
                </div>
            </div>
        </div>
        );
    }
}