import {actions} from "../store/duck";
import {connect} from "react-redux";
import {DashboardList} from "./DasboardList";


const mapStateToProps = state => {
    return {
        data: state.data
    }
};

const mapDispatchToProps =
    {
        deleteDashboard: actions.deleteDashboard,
        deleteTask: actions.deleteTask,
        changeTitle: actions.changeTitle,
        addTask: actions.addTask,
        toggleActive: actions.toggleActive,
    };

export default connect(mapStateToProps, mapDispatchToProps)(DashboardList);