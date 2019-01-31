import React, {Component} from 'react';
import plus from '../../../img/plus.png';
import cross from '../../../img/cross-out-mark.png';
import './sidebar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import  { Sidebar }  from './sidebar/Sidebar';
 import  {addInputTitle, addInputTask, addDashboard, showSidebar, hideSidebar } from '../../../store/actions'

class Sidebar extends Component {

    render(){
        console.log(this.props)
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
                    onClick={() => {this.props.addDashboard(this.props.title, this.props.task); this.props.hideSidebar()}}
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
      title: state.sidebar.inputTitle,
      task: state.sidebar.inputTask,
      className: state.sidebar.className
    };    
};

const mapActionsToProps = (dispatch) => {
    return {
        showSidebar: bindActionCreators(showSidebar, dispatch),
        hideSidebar: bindActionCreators(hideSidebar, dispatch),
        addInputTitle: bindActionCreators(addInputTitle, dispatch),
        addInputTask: bindActionCreators(addInputTask, dispatch),
        addDashboard: bindActionCreators(addDashboard, dispatch)
    };
}
  
export default connect(mapStateToProps, mapActionsToProps)(Sidebar);