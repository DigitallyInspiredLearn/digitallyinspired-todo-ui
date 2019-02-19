import { withRouter } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions as actionsBoard } from '../dashboard/duck';
import { actions } from './duck';
import OneList from './OneList';

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
        updateCheckboxList: actions.updateCheckboxList,
    }, dispatch),
    actionsBoard: bindActionCreators({
        onBlurs: actionsBoard.updateTitleSuccess,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(OneList);
