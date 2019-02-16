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
        addTaskList: actions.addTaskList,
        deleteList: actions.deleteList,
        deleteTaskList: actions.deleteTaskList,
    }, dispatch),
    actionsBoard: bindActionCreators({
        deleteDashboard: actionsBoard.deleteDashboard,
        updateCheckbox: actionsBoard.updateCheckbox,
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
