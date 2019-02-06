import React, { Component } from 'react';
import './dashboardList.css';
import { Dashboard } from './Dashboard';
import VisibleSidebar from '../sidebar/VisibleSidebar';

export class DashboardList extends Component {

    componentWillMount() {
        this.props.actions.fetchList();
    }
    render(){
        //    console.log("=== DashboardList props ===")
        //    console.log(this.props);

        return (
            <div id="block-content">
                {this.props.data.map(item => {
                    return <Dashboard 
                            actions = {this.props.actions}
                            key = {item.dashboard_id}
                            dashboard_id = {item.dashboard_id} 
                            title = {item.title} 
                            tasks = {item.tasks}
                        />
                })}  
                <VisibleSidebar/>              
          </div>
          
        );
    }
}

