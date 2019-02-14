import {actions} from "./duck";
import {withRouter} from "react-router-dom";
import {bindActionCreators, compose} from 'redux';
import {actions as actionsBoard} from "../dashboard/duck";
import {connect} from "react-redux";
import {OneList} from "./OneList";

const mapStateToProps = state => (
    {
        data: state.list.data,
        todo: state.dashboard.toDoBoard,
    }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchList: actions.fetchList,
        updateTitleList: actions.updateTitleList,
        updateTaskList: actions.updateTaskList,
        changeSearch: actions.changeSearch,
    }, dispatch),
    actionsBoard: bindActionCreators({
        updateTitleDashboard: actionsBoard.updateTitleDashboard,
        deleteDashboard: actionsBoard.deleteDashboard,
        deleteTask: actionsBoard.deleteTask,
        addTask: actionsBoard.addTask,
        updateCheckbox: actionsBoard.updateCheckbox,
        updateTaskName: actionsBoard.updateTaskName,
        onBlurs: actionsBoard.onBlurs,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(OneList);
