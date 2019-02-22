/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NullLenghtDashboard from './NullLenghtDashboard';
import { Dashboard } from './Dashboard';
import VisibleSidebar from './sidebar/SidebarContainer';
import * as styled from './Dashboard.styles';

class DashboardList extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchDashboard();

    render() {
        const {
            statePopup, selectedMy, selectedShared, actions, toDoBoard,
        } = this.props;
        console.log(statePopup);
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
                            onChange={e => actions.searching({ searchDashboards: e.target.value })}
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
                        {/* <div>
                            <input
                                id="ac-2"
                                name="accordion-1"
                                type="checkbox"
                                checked={selectedMy}
                                onClick={() => actions.updateSelectedMyLists(!selectedMy)}
                            />
                            <label htmlFor="ac-2">Show my lists</label>
                        </div> */}
                        <styled.ShowButton
                            checked={selectedMy}
                            onClick={() => actions.updateSelectedMyLists(!selectedMy)}
                        >
                            Show my lists
                        </styled.ShowButton>
                        {/* <div>
                            <input
                                id="ac-3"
                                name="accordion-1"
                                type="checkbox"
                                checked={selectedShared}
                                onClick={() => actions.updateSelectedSharedLists(!selectedShared)}
                            />
                            <label htmlFor="ac-3">Show shared lists</label>
                        </div> */}
                        <styled.ShowButton
                            checked={selectedShared}
                            onClick={() => actions.updateSelectedSharedLists(!selectedShared)}
                        >
                            Show shared lists
                        </styled.ShowButton>
                    </section>
                </div>,
                <div id="content">
                    <main style={{ alignContent: 'start' }}>
                        {
                            toDoBoard.length === 0
                                ? <NullLenghtDashboard />
                                : toDoBoard.map(i => (
                                    <Dashboard
                                        userOwnerId={i.userOwnerId}
                                        idList={i.id}
                                        key={i.id}
                                        title={i.todoListName}
                                        tasks={i.tasks}
                                        toDoBoard={toDoBoard}
                                        actions={actions}
                                        shared={i.shared}
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
    toDoBoard: PropTypes.arrayOf(PropTypes.shape),
};

DashboardList.defaultProps = {
    toDoBoard: [],
};

export default DashboardList;
