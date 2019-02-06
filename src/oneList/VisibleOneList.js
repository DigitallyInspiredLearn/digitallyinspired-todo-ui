import {actions} from "../duck";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {OneList} from "./OneList";
import bindActionCreators from "redux/src/bindActionCreators";
import {compose} from 'redux'


const mapStateToProps = state => {
    return {
        data: state.myList
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        changeTitle: actions.changeTitle,
        addTask: actions.addTask,
        toggleActive: actions.toggleActive
    }, dispatch)

});


export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))
(OneList);