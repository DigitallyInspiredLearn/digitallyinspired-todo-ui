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
                <div id="searchAndWatch">
                    <div id="watchedDashb">
                        <h2>What do you want do watch?</h2>
                        <div id="radio">
                            <label htmlFor="contactChoice1">
                                <input
                                    type="radio"
                                    id="contactChoice1"
                                    name="contact"
                                    value="email"
                                    checked="checked"
                                />Only my dashboard
                            </label>
                            <label htmlFor="contactChoice2">
                                <input
                                    type="radio"
                                    id="contactChoice2"
                                    name="contact"
                                    value="phone"
                                />Only shared dashboard
                            </label>
                            <label htmlFor="contactChoice2">
                                <input
                                    type="radio"
                                    id="contactChoice2"
                                    name="contact"
                                    value="phone"
                                />All dashboard
                            </label>
                        </div>

                    </div>
                    <div
                        className="searchTask"
                        id="searchTask"
                        style={{
                            marginTop: '30px',
                            padding: '3px',
                        }}
                    >
                        <input
                            type="text"
                            className="searchList"
                            placeholder="Search dashboard"
                            onChange={e => this.props.actions.searchList(e.target.value)}
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
                </div>,
            ]
        );
    }
}

export default DashboardList;
