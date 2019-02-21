import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { actions } from "./duck";
import { actions as actionsBoard } from "../dashboard/duck";
import {Popup} from "./Popup";

const mapStateToProps = state => (
    {
        users: state.popup.users,
        search: state.popup.search,
    }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        searchUser: actions.searchUser,
    }, dispatch),
    actionsBoard: bindActionCreators({
        shareList: actionsBoard.shareList,
    }, dispatch),

});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Popup);