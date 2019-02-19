/* eslint-disable react/destructuring-assignment,react/prop-types,no-console */
import React, { Component } from 'react';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    componentWillMount = () => this.props.actions.fetchDashboard();

    render() {
        return (
            [
                <div id="searchAndWatch">
                    <div
                        className="searchTask"
                        id="searchTask"
                        style={{
                            marginTop: '30px',
                            padding: '3px',
                            width: '75%',
                        }}
                    >
                        <input
                            type="text"
                            className="searchList"
                            placeholder="Search dashboard"
                        />
                        <div
                            className="btnSearch fa fa-search fa-2x"
                            style={{
                                backgroundColor: 'inherit',
                                color: 'lightgrey',
                                width: 'auto',
                                paddingRight: '5px',
                            }}
                        />
                    </div>
                    <nav className="dropdownmenu">
                        <ul>
                            <li><a>All</a></li>
                            <li><a>Shared</a></li>
                            <li><a>Private</a></li>
                        </ul>
                    </nav>
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
                                        toDoBoard={this.props.toDoBoard}
                                        actions={this.props.actions}
                                    />
                                ))
                        }
                    </main>
                    <VisibleSidebar />
                </div>,
            ]
        );
    }
}
export default DashboardList;
