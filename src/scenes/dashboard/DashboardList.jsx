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
                    <div id="watchedDashb">
                        <div id="radio">
                            <label htmlFor="contactChoice1">
                                <input
                                    type="checkbox"
                                    name="show"
                                    id="myList"
                                    value="myList"
                                    checked={this.props.selectedMy}
                                    onClick={() => this.props.actions.updateSelectedMyLists(!this.props.selectedMy)}
                                />Show my dashboard
                            </label>
                            <label htmlFor="contactChoice2">
                                <input
                                    type="checkbox"
                                    name="show"
                                    value="sharedList"
                                    id="sharedList"
                                    checked={this.props.selectedShared}
                                    onClick={() =>
                                        this.props.actions.updateSelectedSharedLists(!this.props.selectedShared)}
                                />Show shared dashboard
                            </label>
                        </div>
                    </div>
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
