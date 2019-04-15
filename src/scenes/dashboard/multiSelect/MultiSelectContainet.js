import { compose, bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MultiSelect from './MultiSelect';
import { actions } from './duck';

const mapStateToProps = state => ({
    tags: state.tags.tags,
    visible: state.tags.visible,
    selectedTags: state.tags.selectedTags,
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchTags: actions.fetchTags,
        addTag: actions.addTag,
        deleteTag: actions.deleteTag,
        visiblePopap: actions.visiblePopap,
        getSelectedTags: actions.getSelectedTags,
    }, dispatch),
});


export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(MultiSelect);
