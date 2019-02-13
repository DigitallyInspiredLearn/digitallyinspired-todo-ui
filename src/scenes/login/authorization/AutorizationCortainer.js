import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import Authorization from './Authorization';
import { actions } from './duck';

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        authorization: actions.authorization,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Authorization);
