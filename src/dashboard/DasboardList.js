import { Dashboard } from "./Dashboard";
import {
    deleteDashboard,
    deleteTask,
    changeTitle,
    addTask,
    toggleActive
}
from '../store/dashboard/actionsDashboard';
import { connect } from 'react-redux'
import { Component } from "react";
import React from "react";

class DashboardList extends Component {

    render() {
        return (
            <div className="container">
                {
                    this.props.data.map(item => {
                        return <Dashboard
                            idList={item.idList}
                            title={item.title}
                            tasks={item.tasks}
                            key={item.idList}
                            deleteDashboard={this.props.deleteDashboard}
                            deleteTask={this.props.deleteTask}
                            changeTitle={this.props.changeTitle}
                            addTask={this.props.addTask}
                            toggleActive={this.props.toggleActive}
                        />
                    })
                }

            </div>

        );
    }
}


//export const App = Root;

const mapStateToProps = state => {
    return {
        data: state.dashboard.data
    }
};

const mapDispatchToProps =
    {
        deleteDashboard: deleteDashboard,
        deleteTask: deleteTask,
        changeTitle: changeTitle,
        addTask: addTask,
        toggleActive: toggleActive,
    };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardList);