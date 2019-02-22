import { bindActionCreators, compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Theme from './Theme';
// import { actions } from './duck';

const mapStateToProps = state => ({
    // currentUser: state.profileReducer.currentUser,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Theme);
