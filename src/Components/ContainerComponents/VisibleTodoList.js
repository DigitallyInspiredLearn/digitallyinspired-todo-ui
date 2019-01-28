import { connect } from 'react-redux'
import {DashboardList} from "../PresentationalComponents/dashboard/css/DashboardList";
import {VisibilityFilters} from "../../Redux/actions/actionsForDashboard";
import {updateTitleDashboard,
    deleteDashboard,
} from "../../Redux/actions/actionsForDashboard";

const getVisibleTodos = (toDoList, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return toDoList;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};


const mapStateToProps = state => ({
    toDoBoard: getVisibleTodos(state.toDoBoard, state.visibilityFilter)
});
console.log(mapStateToProps);
const mapDispatchToProps = dispatch => ({
    updateTitleDashboard: (id,newTitle) => dispatch(updateTitleDashboard(id,newTitle)),
    deleteDashboard: id => dispatch(deleteDashboard(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardList)