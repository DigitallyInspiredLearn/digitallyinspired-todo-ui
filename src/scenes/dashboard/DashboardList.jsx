/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dashboard } from './Dashboard';
import VisibleSidebar from './sidebar/SidebarContainer';
import * as styled from './styled/DashboardList.styles';

class DashboardList extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchDashboard();

    render() {
        const {
            selectedMy, selectedShared, actions, toDoBoard,
        } = this.props;
        return (
            <styled.Main>
                <styled.SearchAndChecked>
                    <styled.SearchDiv>
                        <styled.Search
                            type="text"
                            placeholder="Search dashboard"
                            onChange={e => actions.searching({ searchDashboards: e.target.value })}
                        />
                        <div
                            className="fa fa-search fa-2x"
                            style={{
                                backgroundColor: 'inherit',
                                color: 'lightgrey',
                                paddingRight: '5px',
                                borderRadius: '5px',
                            }}
                        />
                    </styled.SearchDiv>
                    <styled.CheckboxDiv>
                        <styled.ShowButton
                            checked={selectedMy}
                            onClick={() => actions.updateSelectedMyLists(!selectedMy)}
                        >
                            Show my lists
                        </styled.ShowButton>
                        <styled.ShowButton
                            checked={selectedShared}
                            onClick={() => actions.updateSelectedSharedLists(!selectedShared)}
                        >
                            Show shared lists
                        </styled.ShowButton>
                    </styled.CheckboxDiv>
                </styled.SearchAndChecked>
                <styled.DashboardList>
                    {
                        toDoBoard.length === 0
                            ? (
                                <styled.NullLenghtDashboards>
                                    You don't have to-do yet. Plan your tasks with DI To-do! Press to +
                                </styled.NullLenghtDashboards>
                            )
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
                </styled.DashboardList>
                <VisibleSidebar />
            </styled.Main>
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
