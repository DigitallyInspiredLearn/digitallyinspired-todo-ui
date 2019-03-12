/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Sorting from '../../components/sorting/Sorting';
import DropDown from '../../components/dropDown/DropDown';
import { Dashboard } from './Dashboard';
import * as styled from './DashboardList.styles';
import loupe from '../../image/magnifying-glass-browser.svg';
import VisibleSidebar from './sidebar/SidebarContainer';

class DashboardList extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchDashboard();

    handlePageChange = ({ actions } = this.props, value) => {
        actions.changePagination(value.selected);
    };

    render() {
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
                            <DropDown
                                changeValue={actions.changeSize}
                                titleButton="Sorting"
                                currentValue={pageSize}
                                possibleValues={['createdDate,asc', 'other']}
                                stylesValues=" margin-left: 10px; width: 130px;"
                                stylesButton="
                                     padding: 15px 5px;
                                     margin-left: 10px ;
                                     width: 145px;
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
                        titleButton="Check size"
                        possibleValues={[4, 8, 16]}
                        drop="up"
                        stylesValues="width: 80px;margin-left: 8px ;"
                        stylesButton="padding: 15px 5px; margin: 8px; width: 95px;"
                    />
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
