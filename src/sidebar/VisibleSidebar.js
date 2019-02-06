import {actions} from "../duck";
import {Sidebar} from "./Sidebar";
import {connect} from "react-redux";
import bindActionCreators from "redux/src/bindActionCreators";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";

const mapStateToProps = state => {
    return {
        display: state.display,
        title: state.inputTitle,
        task: state.inputTask
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        showSidebar: actions.showSidebar,
        closeSidebar: actions.closeSidebar,
        addNewDashboard: actions.addNewDashboard,
        changeTitles: actions.changeTitles,
        changeTask: actions.changeTask
    }, dispatch)
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(Sidebar);


