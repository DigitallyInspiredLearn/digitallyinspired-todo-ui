import { withRouter } from 'react-router-dom';
import { createSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actions as actionsBoard } from '../dashboard/duck';
import { actions } from './duck';
import OneList from './OneList';

const getDoneFilter = state => state.list.selectedDone;

const getNotDoneFilter = state => state.list.selectedNotDone;

const getTasksRaw = state => state.list.data.tasks;

const getTasks = createSelector(
    getTasksRaw,
    getDoneFilter,
    getNotDoneFilter,
    (tasks, done, notDone) => !(done ^ notDone) ? tasks : tasks.filter(task => task.isComplete === done),
);

const mapStateToProps = state => (
    {

        data: state.list.data,
        tasks: getTasks(state),
        done: state.list.selectedDone,
        notDone: state.list.selectedNotDone,
        todo: state.dashboard.toDoBoardRow,
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
        selectDoneAction: actions.selectDoneAction,
        selectedNotDoneAction: actions.selectedNotDoneAction,
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
