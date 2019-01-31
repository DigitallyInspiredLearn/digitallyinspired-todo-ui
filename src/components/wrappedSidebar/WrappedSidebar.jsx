import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Sidebar }  from './sidebar/Sidebar';
import  {addInputTitle, addInputTask, addDashboard, showSidebar, hideSidebar } from '../../store/actions';

const mapStateToProps = (state) => {
    return {
      title: state.sidebar.inputTitle,
      task: state.sidebar.inputTask,
      className: state.sidebar.className
    };    
};

const mapActionsToProps = (dispatch) => {
    return {
        showSidebar: bindActionCreators(showSidebar, dispatch),
        hideSidebar: bindActionCreators(hideSidebar, dispatch),
        addInputTitle: bindActionCreators(addInputTitle, dispatch),
        addInputTask: bindActionCreators(addInputTask, dispatch),
        addDashboard: bindActionCreators(addDashboard, dispatch)
    };
}
  
export default connect(mapStateToProps, mapActionsToProps)(Sidebar);