import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import DashboardList from './DashboardList';
import { actions } from './duck';

const mapStateToProps = state => ({ toDoBoard: state.dashboard.toDoBoard });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchDashboard: actions.fetchDashboard,
        fetchOneDashboardSuccess: actions.fetchOneDashboardSuccess,
        updateTitleDashboard: actions.updateTitleDashboard,
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        addTask: actions.addTask,
        updateCheckbox: actions.updateCheckbox,
        updateTaskName: actions.updateTaskName,
        onBlurs: actions.onBlurs,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(DashboardList);
