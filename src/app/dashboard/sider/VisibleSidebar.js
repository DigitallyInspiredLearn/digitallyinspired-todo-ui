import {connect} from 'react-redux'
import {Sidebar} from "./Sidebar";
import {actions} from "../../duck";

const mapStateToProps = (state) => ({toDoBoard: state.toDoBoard});

const mapDispatchToProps = {
    addNewDashboard: actions.addNewDashboard
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)