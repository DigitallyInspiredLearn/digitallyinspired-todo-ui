import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import DashboardList from './DashboardList';
import { actions } from './duck';

const mapStateToProps = state => ({ toDoBoard: state.dashboard.toDoBoard });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchDashboard: actions.fetchDashboard,
        updateTitleDashboard: actions.updateTitleDashboard,
        deleteDashboard: actions.deleteDashboard,
        fetchTasks: actions.fetchTasks,
        deleteTask: actions.deleteTask,
        addTask: actions.addTask,
        updateCheckbox: actions.updateCheckbox,
        updateTaskName: actions.updateTaskName,
        updateTitleSuccess: actions.updateTitleSuccess,
        searchList: actions.searchList,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(DashboardList);
