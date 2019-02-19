/* eslint-disable react/destructuring-assignment,react/prop-types,no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 'myList',
        };
    }

    componentWillMount = () => this.props.actions.fetchDashboard(this.state.selected);

    // componentDidUpdate= () =>  this.props.actions.fetchDashboard( this.state.selected );

    render() {
        return (
            [
                <div id="searchAndWatch">
                    <div
                        className="searchTask"
                        id="searchTask"
                        style={{
                            marginTop: '0px',
                            padding: '3px',
                            width: '80%',
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
                    <section className="ac-container">
                        <div>
                            <input id="ac-2" name="accordion-1" type="checkbox"/>
                            <label htmlFor="ac-2">Shared lists</label>
                        </div>
                        <div>
                            <input id="ac-3" name="accordion-1" type="checkbox"/>
                            <label htmlFor="ac-3">My lists</label>
                        </div>
                    </section>
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

DashboardList.propTypes = {
    toDoBoard: PropTypes.array,
};

DashboardList.defaultProps = {
    toDoBoard: [],
};

export default DashboardList;
