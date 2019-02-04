import React, {Component} from 'react';
import plus from '../img/plus.png';
import cross from '../img/cross-out-mark.png';
import './sidebar.css';
import { connect } from 'react-redux';
import { actions } from '../store/duck';

class Sidebar extends Component {

    render(){
        // console.log("== sidebar props ===")
        // console.log(this.props);
        return (
        <div>   
            <div 
                id = "plus" 
                onClick = {this.props.showSidebar}
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
                    onClick = {this.props.hideSidebar}
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
                    onChange = {(e) => this.props.addInputTitle(e.target.value)}
                />
                <input 
                    type = "text" 
                    id = "add-task" 
                    placeholder = "Add to-do" 
                    onChange = {(e) => this.props.addInputTask(e.target.value)}
                />
                <div 
                    id="button-add" 
                    onClick={() => {this.props.addList({
                                            addTitle: this.props.title,
                                            addTask: this.props.task
                                        });
                                        this.props.addInputTitle('');
                                        this.props.addInputTask('');
                                        this.props.hideSidebar()
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

const mapStateToProps = (state) => {
    return {
      title: state.inputTitle,
      task: state.inputTask,
      className: state.className
    };    
};

const mapActionsToProps = {

    showSidebar: actions.showSidebar,
    hideSidebar: actions.hideSidebar,
    addInputTitle: actions.addInputTitle,
    addInputTask: actions.addInputTask,
    addDashboard: actions.addDashboard,
    addList: actions.addList
}
  
export default connect(mapStateToProps, mapActionsToProps)(Sidebar);