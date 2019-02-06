import { actions } from "../store/duck";
import { connect } from "react-redux";
import { DashboardList } from "./DashboardList";
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux'

const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = (dispatch) => ({

    actions: bindActionCreators({

        fetchList: actions.fetchList,
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        changeDashboardTitle: actions.changeDashboardTitle,
        addList: actions.addList,
        addTask: actions.addTask,
        changeTaskName: actions.changeTaskName,
        changeTaskSelected: actions.changeTaskSelected,
    }, dispatch)
});

export default compose(
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)
(DashboardList);