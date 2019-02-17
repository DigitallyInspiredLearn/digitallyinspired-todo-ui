import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import Authorization from './Auth';
import { actions } from './duck';

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        authorization: actions.login,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Authorization);
