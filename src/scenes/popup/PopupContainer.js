import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import { actions } from "./duck";
import {Popup} from "./Popup";

const mapStateToProps = state => (
    {
        users: state.popup.users,
    }
);

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        searchUser: actions.searchUser,
    }, dispatch),

});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Popup);