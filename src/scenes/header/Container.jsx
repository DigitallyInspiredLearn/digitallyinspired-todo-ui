import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose, bindActionCreators } from 'redux';
import './css/headerStyle.css';
import PropTypes from 'prop-types';
import { actions } from './duck';
import logo from '../../image/logo_di.svg';
import settings from '../../image/settings.svg';

const Container = ({ children }) => (
    <div className="App">
        <header>
            <img src={logo} className="logo" alt="logo" />
            <b>To</b>
            <p id="line" />
            <b>do</b>
            <img src={settings} className="settings" alt="setting" />
        </header>
        {children}
    </div>
);
Container.propTypes = {
    children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        fetchDashboard: actions.fetchDashboard,
        updateTitleDashboard: actions.updateTitleDashboard,
        deleteDashboard: actions.deleteDashboard,
        fetchTasks: actions.fetchTasks,
        deleteTask: actions.deleteTask,
        addTask: actions.addTask,
        updateCheckbox: actions.updateCheckbox,
        updateTaskName: actions.updateTaskName,
        updateTitleSuccess: actions.updateTitleSuccess,
        searchList: actions.searchList,
        updateSelectedSharedLists: actions.updateSelectedSharedLists,
        updateSelectedMyLists: actions.updateSelectedMyLists,
    }, dispatch),
});

export default compose(
    withRouter,
    connect(
        mapStateToProps,
        mapDispatchToProps,
    ),
)(Container);

// export default Container;
