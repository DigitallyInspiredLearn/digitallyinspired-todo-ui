import React, { Component } from 'react';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import randomInteger from '../../config/helper';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    componentWillMount = () => this.props.actions.fetchDashboard();

    render() {
        return (
            <div id="content">
                <main style={{ alignContent: 'start' }}>
                    {
                        this.props.toDoBoard.length === 0
                            ? <NullLenghtDashboard />
                            : this.props.toDoBoard.map(i => (
                                <Dashboard
                                    idList={i.idList}
                                    key={i.idList}
                                    title={i.title}
                                    tasks={i.tasks}
                                    randomInteger={randomInteger}
                                    toDoBoard={this.props.toDoBoard}
                                    actions={this.props.actions}
                                />
                            ))
                    }
                </main>
                <VisibleSidebar />
            </div>

        );
    }
}
export default DashboardList;
