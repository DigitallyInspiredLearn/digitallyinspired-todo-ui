import { connect } from 'react-redux'
import { DashboardList } from "../PresentationalComponents/dashboard/DashboardList";
import {
    updateTitleDashboard,
    deleteDashboard,
} from "../../Redux/actions/actionsForDashboardAndSider";
import { Component } from "react";
import React from "react";
import {
    addTask,
    deleteTask,
    updateCheckbox,
    updateTaskName
} from "../../Redux/actions/actionsForTask";

export class VisibleTodoList extends Component {
    render() {
        return(
            <DashboardList
                updateTitleDashboard= { this.props.updateTitleDashboard }
                deleteDashboard= { this.props.deleteDashboard }
                toDoBoard= { this.props.toDoBoard }
                deleteTask= { this.props.deleteTask }
                addTask= { this.props.addTask }
                updateCheckbox= { this.props.updateCheckbox }
                updateTaskName= { this.props.updateTaskName }
                randomInteger= { this.props.randomInteger }
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        toDoBoard: state.functionality.toDoBoard
    }
};

const mapDispatchToProps = {
    updateTitleDashboard: updateTitleDashboard,
    deleteDashboard: deleteDashboard,
    deleteTask: deleteTask,
    addTask: addTask,
    updateCheckbox: updateCheckbox,
    updateTaskName: updateTaskName,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VisibleTodoList)