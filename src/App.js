import React, {Component} from 'react';
import './App.css';
import {Header} from "./header/Header";
import VisibleDashboard from './dashboard/VisibleDashboard'
import VisibleSidebar from './sidebar/VisibleSidebar'

class App extends Component {
    render() {
        return (
            <div className="main_block">
                <Header/>
                <VisibleSidebar/>
                <VisibleDashboard/>
            </div>
        );
    }
}

export default App;
