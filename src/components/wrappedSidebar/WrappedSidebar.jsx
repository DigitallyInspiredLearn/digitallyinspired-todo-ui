import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Sidebar } from './sidebar/Sidebar';
import  {addInputTitle, addDashboard, showSidebar, hideSidebar } from '../../store/actions';

export class WrappedSidebar extends Component {
    render(){
        console.log(this.props)
        return (
            <Sidebar
                title = {this.props.title}
                task = {this.props.task}
                addInputTitle = {this.props.addInputTitle}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
      data: state.sidebar.data,
    };    
};

const mapActionsToProps = (dispatch) => {
    return {
        addInputTitle: bindActionCreators(addInputTitle, dispatch)
    };
}
  
export default connect(mapStateToProps, mapActionsToProps)(WrappedSidebar);