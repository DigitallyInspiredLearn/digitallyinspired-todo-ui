import {connect} from 'react-redux'
import {DashboardList} from "./DashboardList";
import {actions} from "../duck";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

const mapStateToProps = (state) => ({toDoBoard: state.toDoBoard});

const mapDispatchToProps = {
    fetchDashboard: actions.fetchDashboard,
    updateTitleDashboard: actions.updateTitleDashboard,
    deleteDashboard: actions.deleteDashboard,
    deleteTask: actions.deleteTask,
    addTask: actions.addTask,
    updateCheckbox: actions.updateCheckbox,
    updateTaskName: actions.updateTaskName,
    fetchOneDashboardSuccess: actions.fetchOneDashboardSuccess,
    actions: {
        fetchDashboard: actions.fetchDashboard,
        updateTitleDashboard: actions.updateTitleDashboard,
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        addTask: actions.addTask,
        updateCheckbox: actions.updateCheckbox,
        updateTaskName: actions.updateTaskName,
    }
};

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(DashboardList)
