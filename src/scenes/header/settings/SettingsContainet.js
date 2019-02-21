import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Settings from './Settings';
import { actions } from './prifile/duck';

const mapStateToProps = state => ({
    currentUser: state.profileReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchCurrentUser: actions.fetchCurrentUser,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Settings);
