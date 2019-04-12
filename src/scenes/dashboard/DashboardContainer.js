import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import DashboardList from './DashboardList';
import { actions } from './duck';

const mapStateToProps = state => ({
    toDoBoard: state.dashboard.toDoBoard,
    selectedShared: state.dashboard.selectedShared,
    selectedMy: state.dashboard.selectedMy,
    pageSize: state.dashboard.pageSize,
    sort: state.dashboard.sort,
    currentPage: state.dashboard.currentPage,
    totalPages: state.dashboard.totalPages,
    currentUser: state.profile.currentUser,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchDashboard: actions.fetchDashboard,
        updateTitleDashboard: actions.updateTitleDashboard,
        updateTitleSuccess: actions.updateTitleSuccess,
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        addTask: actions.addTask,
        updateCheckbox: actions.updateCheckbox,
        updateTaskName: actions.updateTaskName,
        updateTaskNameSuccess: actions.updateTaskNameSuccess,
        updateSelectedSharedLists: actions.updateSelectedSharedLists,
        updateSelectedMyLists: actions.updateSelectedMyLists,
        search: actions.search,
        togglePopup: actions.togglePopup,
        changeSize: actions.changeSize,
        changePagination: actions.changePagination,
        changeSort: actions.changeSort,
    }, dispatch)
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(DashboardList);
