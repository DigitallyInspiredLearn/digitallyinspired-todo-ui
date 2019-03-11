/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sorting from '../../components/sorting/Sorting';
import CheckSize from '../../components/checkSize/CheckSize';
import { Dashboard } from './Dashboard';
import * as styled from './DashboardList.styles';
import loupe from '../../image/magnifying-glass-browser.svg';
import VisibleSidebar from "./sidebar/SidebarContainer";

class DashboardList extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchDashboard();

    handlePageChange = ({ actions } = this.props, value) => {
        actions.changePagination(value.selected);
    };

    render() {
        console.log(this.props);
        const {
            selectedMy, selectedShared, actions, toDoBoard, pageSize, totalPages,
        } = this.props;
        return (
            [
                <styled.App key="app">
                    <styled.SearchAndChecked>
                        <styled.SearchDiv>
                            <styled.Search
                                type="text"
                                placeholder="Search dashboard"
                                onChange={e => actions.search(e.target.value)}
                            />
                            <styled.IconSearch src={loupe} />
                        </styled.SearchDiv>
                        <styled.CheckboxDiv>
                            <Sorting />
                            <styled.ShowButton
                                checked={selectedMy}
                                onClick={() => actions.updateSelectedMyLists(!selectedMy)}
                                style={{ marginRight: '10px', marginLeft: '10px' }}
                            >
                            Show my
                            </styled.ShowButton>
                            <styled.ShowButton
                                checked={selectedShared}
                                onClick={() => actions.updateSelectedSharedLists(!selectedShared)}
                            >
                            Show shared
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
                                        createdBy={i.createdBy}
                                        modifiedBy={i.modifiedBy}
                                        createdDate={i.createdDate}
                                        modifiedDate={i.modifiedDate}
                                    />
                                ))
                        }
                    </styled.DashboardList>
                </styled.App>,
                <styled.Footer key="footer">
                    <styled.Pagination
                        pageCount={totalPages}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
                        containerClassName="pagination-container"
                        onPageChange={this.handlePageChange}
                    />
                    <CheckSize changeSize={actions.changeSize} pageSize={pageSize} />
                    <VisibleSidebar />
                </styled.Footer>,
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
