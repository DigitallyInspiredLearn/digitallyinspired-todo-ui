import {actions} from "../duck";
import {connect} from "react-redux";
import {DashboardList} from "./DashboardList";
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'
import bindActionCreators from "redux/src/bindActionCreators";


const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps = (dispatch) => (
    {
        actions: bindActionCreators({
            fetchList: actions.fetchList,
            deleteDashboard: actions.deleteDashboard,
            infoAboutList: actions.infoAboutList,
            deleteTask: actions.deleteTask,
            changeTitle: actions.changeTitle,
            addTask: actions.addTask,
            toggleActive: actions.toggleActive
        },dispatch)
    });


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
    (DashboardList);
