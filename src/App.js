import React, { Component } from 'react';
import plus from './image/plus.PNG';
//import { combineReducers } from "redux";
import './App.css';
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";
import DashboardList from "./dashboard/DasboardList";
import {
    showSidebar,
    closeSidebar,
    changeTitle,
    changeTask
} from "./store/sidebar/actionSidebar";
import { addNewDashboard } from './store/dashboard/actionsDashboard';
import connect from "react-redux/es/connect/connect";


class App extends Component {
    render() {
        return (
            <div className="main_block">
                <Header/>
                <DashboardList/>
                <Sidebar
                    display={this.props.display}
                    title={this.props.title}
                    task={this.props.task}
                    closeSidebar={this.props.closeSidebar}
                    addNewDashboard={this.props.addNewDashboard}
                    changeTitle={this.props.changeTitle}
                    changeTask={this.props.changeTask}
                />
                <div className="plus">
                    <img
                        id="myBtn"
                        src={plus}
                        alt="Plus"
                        onClick={() => this.props.showSidebar(true)}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        display: state.sidebar.display,
        title: state.sidebar.inputTitle,
        task: state.sidebar.inputTask
    }
};

const mapDispatchToProps = {
    showSidebar: showSidebar,
    closeSidebar: closeSidebar,
    addNewDashboard: addNewDashboard,
    changeTitle: changeTitle,
    changeTask: changeTask
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

