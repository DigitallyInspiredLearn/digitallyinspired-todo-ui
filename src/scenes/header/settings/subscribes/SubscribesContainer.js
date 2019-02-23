import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import Subscribes from './Subscribes';
import { actions } from './duck';

const mapStateToProps = state => ({
    search: state.subscribeReducer.search,
    subscribers: state.subscribeReducer.subscribers,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        searchSubscribers: actions.searchSubscribers,
        fetchSubscribers: actions.fetchSubscribers,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Subscribes);
