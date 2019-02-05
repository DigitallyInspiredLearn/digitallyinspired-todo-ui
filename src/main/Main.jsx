import React, { Component } from 'react';
import './Main.css';
import { Dashboard } from './dashboard/Dashboard';
import { connect } from 'react-redux';
import { actions } from '../store/duck';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Main extends Component {

    componentWillMount() {
        this.props.fetchList();
    }
    render(){
         console.log("=== Main props ===")
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
                            deleteList = {this.props.deleteList}
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

    fetchList: actions.fetchList,
    deleteDashboard: actions.deleteDashboard,
    deleteList: actions.deleteList,
    deleteTask: actions.deleteTask,
    changeDashboardTitle: actions.changeDashboardTitle,
    addList: actions.addList,
    addTask: actions.addTask,
    changeTaskName: actions.changeTaskName,
    changeTaskSelected: actions.changeTaskSelected
};

export default compose(
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)
(Main);