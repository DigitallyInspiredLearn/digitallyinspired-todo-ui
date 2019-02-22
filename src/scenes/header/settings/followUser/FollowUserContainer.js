import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import FollowUser from './FollowUser';
import { actions } from './duck';

const mapStateToProps = state => ({

    userNameList: state.followUserReducer.userNameList,
    search: state.followUserReducer.search,
    message: state.followUserReducer.message,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        searchUserForFollowing: actions.searchUserForFollowing,
        followUser: actions.followUser,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(FollowUser);
