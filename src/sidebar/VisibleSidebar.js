import { actions } from "../store/duck";
import { Sidebar } from "./Sidebar";
import { connect } from "react-redux";


const mapStateToProps = state => {
    return {
        display: state.display,
        title: state.inputTitle,
        task: state.inputTask
    }
};

const mapDispatchToProps = {
    showSidebar: actions.showSidebar,
    closeSidebar: actions.closeSidebar,
    addNewDashboard: actions.addNewDashboard,
    changeTitles: actions.changeTitles,
    changeTask: actions.changeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)


