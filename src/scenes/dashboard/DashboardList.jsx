import React, { Component } from 'react';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import randomInteger from '../../config/helper';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    componentWillMount = () => this.props.actions.fetchDashboard();

    render() {
        return (
            [
                <div
                    className="searchTask"
                    id="searchTask"
                    style={{
                        width: '97%',
                        marginTop: '30px',
                    }}>
                    <input
                        type="text"
                        className="searchList"
                        placeholder="Search dashboard"
                        onChange={(e) => this.props.actions.searchList(e.target.value)}
                    />
                    <div
                        className="btnSearch fa fa-search fa-2x"
                        style={{
                            backgroundColor: 'inherit',
                            color: 'lightgrey',
                            width: 'auto',
                            paddingRight: '15px'
                        }}/>
                </div>,
                <div id="content">
                    <main style={{ alignContent: 'start' }}>
                        {
                            this.props.toDoBoard.length === 0
                                ? <NullLenghtDashboard />
                                : this.props.toDoBoard.map(i => (
                                    <Dashboard
                                        userOwnerId={i.userOwnerId}
                                        idList={i.id}
                                        key={i.id}
                                        title={i.todoListName}
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
            ]
        );
    }
}
export default DashboardList;
