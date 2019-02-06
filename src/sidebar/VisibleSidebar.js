import { connect } from 'react-redux';
import { actions } from '../store/duck';
import { compose, bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar'

const mapStateToProps = (state) => {
    return {
      title: state.inputTitle,
      task: state.inputTask,
      className: state.className
    };    
};

const mapDispatchToProps = (dispatch) =>  ({

    actions: bindActionCreators({
        showSidebar: actions.showSidebar,
        hideSidebar: actions.hideSidebar,
        addInputTitle: actions.addInputTitle,
        addInputTask: actions.addInputTask,
        addDashboard: actions.addDashboard,
        addList: actions.addList
    }, dispatch)
});
  
export default compose(
    withRouter,
    connect(
        mapStateToProps, 
        mapDispatchToProps
    )
)(Sidebar);