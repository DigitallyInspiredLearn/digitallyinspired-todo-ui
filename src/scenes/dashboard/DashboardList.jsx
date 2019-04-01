/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import DropDown from '../../components/dropDown/DropDown';
import { Dashboard } from './Dashboard';
import * as styled from './DashboardList.styles';
import loupe from '../../image/magnifying-glass-browser.svg';
import Search from '../../components/search/Search';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchDashboard();

    handlePageChange = ({ selected }) => {
        const { actions } = this.props;
        actions.changePagination(selected);
    };

    handleChange = (newValue) => {
        const { actions } = this.props;
        actions.search(newValue);
    };

    render() {
        const {
            search, selectedMy, selectedShared, actions, toDoBoard, pageSize, totalPages, sort,
        } = this.props;
        return (
            [
                <styled.App key="app">
                    <styled.SearchAndChecked>
                        <styled.SearchDiv>
                            <Search
                                onChange={this.handleChange}
                                value={search}
                                placeholder="Search dashboard"
                            />
                            <styled.IconSearch src={loupe} />
                        </styled.SearchDiv>
                        <styled.CheckboxDiv>
                            <DropDown
                                changeValue={actions.changeSort}
                                titleButton="Sorting"
                                currentValue={sort}
                                possibleValues={[
                                    'id,asc',
                                    'id,desc',
                                    'todoListName,asc',
                                    'todoListName,desc', 'createdDate,asc', 'createdDate,desc', 'modifiedDate,asc', 'modifiedDate,desc',
                                ]}
                                stylesValues=" margin-left: 12px; width: 130px;"
                                stylesButton="
                                    padding: 16px 8px;
                                    margin-left: 10px ;
                                    width: auto;
                                    min-width: 150px;
                                    font-weight: bold;
                                    @media (max-width: 600px) {
                                        flex: 1;
                                        text-align: center;
                                        padding:5px;
                                    }
                                "
                            />
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
                    <div style={{display: 'flex'}}>
                    <styled.Pagination>
                        <ReactPaginate
                            pageCount={totalPages}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={1}
                            containerClassName="pagination-container"
                            onPageChange={this.handlePageChange}
                        />
                    </styled.Pagination>
                    <DropDown
                        changeValue={actions.changeSize}
                        currentValue={pageSize}
                        titleButton="Change size"
                        possibleValues={[4, 8, 16]}
                        drop="up"
                        stylesValues="width: 75px;margin-left: 17px ;"
                        stylesButton="padding: 5px ; margin: 15px; width: 95px;"
                    />
                    </div>
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
