import { connect } from 'react-redux'
import { DashboardList } from "./DashboardList";
import { actions } from "../duck";

const mapStateToProps = ( state ) => ( { toDoBoard : state.toDoBoard } );

const mapDispatchToProps = {
    updateTitleDashboard: actions.updateTitleDashboard,
    deleteDashboard: actions.deleteDashboard,
    deleteTask: actions.deleteTask,
    addTask: actions.addTask,
    updateCheckbox: actions.updateCheckbox,
    updateTaskName: actions.updateTaskName,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardList)