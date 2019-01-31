import React, { Component } from 'react';
import './Main.css';
import { Dashboard } from '../../components/dashboard/Dashboard';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteDashboard, changeDashboardTitle, deleteTask, addTask, changeTaskName, changeTaskSelected } from '../../store/actions';

class Main extends Component {
    render(){
        //console.log(this.props);
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

const mapStateToProps = (state) => {
    return {
      data: state.dashboard.data,
    };
  };

const mapActionsToProps = (dispatch) => {
    return {
      deleteDashboard: bindActionCreators(deleteDashboard, dispatch),
      changeDashboardTitle: bindActionCreators(changeDashboardTitle, dispatch),
      deleteTask: bindActionCreators(deleteTask, dispatch),
      addTask: bindActionCreators(addTask, dispatch),
      changeTaskName: bindActionCreators(changeTaskName, dispatch),
      changeTaskSelected: bindActionCreators(changeTaskSelected, dispatch)
    };
}
  
export default connect(mapStateToProps, mapActionsToProps)(Main);