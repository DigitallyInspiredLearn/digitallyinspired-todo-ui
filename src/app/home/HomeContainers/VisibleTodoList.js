import {connect} from 'react-redux'
import {DashboardList} from "../HomeComponents/dashboard/DashboardList";
import {actions} from "../duck";

const mapStateToProps = (state) => ({toDoBoard: state.toDoBoard});

const mapDispatchToProps = {

    updateTitleDashboard: actions.updateTitleDashboard,
    deleteDashboard: actions.deleteDashboard,
    deleteTask: actions.deleteTask,
    addTask: actions.addTask,
    updateCheckbox: actions.updateCheckbox,
    updateTaskName: actions.updateTaskName,
    fetchDashboard: actions.fetchDashboard
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardList)