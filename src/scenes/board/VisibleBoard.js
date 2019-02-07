import './board.css';
import { connect } from 'react-redux';
import { actions } from '../../store/duck';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { Board } from './Board'

const mapStateToProps = (state) => {
    return {
        oneList: state.oneList
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators ({
        fetchBoard: actions.fetchBoard,
        deleteDashboard: actions.deleteDashboard,
        changeDashboardTitle: actions.changeDashboardTitle,
        addTask: actions.addTask,
        changeTaskName: actions.changeTaskName,
        changeTaskSelected: actions.changeTaskSelected,
        deleteTask: actions.deleteTask,
    }, dispatch)
});

export default compose(
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)(Board);