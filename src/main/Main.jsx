import React, { Component } from 'react';
import './Main.css';
import { Dashboard } from './dashboard/Dashboard';
import { connect } from 'react-redux';
import { actions } from '../store/duck';

class Main extends Component {
    render(){
        console.log("=== dashboard props ===")
        console.log(this.props);
        return (
            <div id="block-content">
                {this.props.data.map(item => {
                    return <Dashboard 
                            key = {item.dashboard_id}
                            dashboard_id = {item.dashboard_id} 
                            title = {item.title} 
                            tasks = {item.tasks}
                            deleteDashboard = {this.props.deleteDashboard}
                            changeDashboardTitle = {this.props.changeDashboardTitle}
                            deleteTask = {this.props.deleteTask}
                            changeTaskName = {this.props.changeTaskName}
                            changeTaskSelected = {this.props.changeTaskSelected}
                            addTask = {this.props.addTask}
                        />
                })}                
          </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = {

    deleteDashboard: actions.deleteDashboard,
    deleteTask: actions.deleteTask,
    changeDashboardTitle: actions.changeDashboardTitle,
    addTask: actions.addTask,
    changeTaskName: actions.changeTaskName,
    changeTaskSelected: actions.changeTaskSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);