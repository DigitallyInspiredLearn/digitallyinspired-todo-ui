/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import DropDown from '../../components/dropDown/DropDown';
import { Dashboard } from './Dashboard';
import * as styled from './DashboardList.styles';
import Search from '../../components/search/Search';
import VisibleSidebar from './sidebar/SidebarContainer';
import MultiSelect from './multiSelect/MultiSelectContainet';
import { DropDownMaterial } from '../../components/dropDown/DropDownMaterial';
import { InputLabel } from "../../components/dropDown/DropDown.styled";

class DashboardList extends Component {
    constructor(props) {
        super(props);
        let stompClient = null;
        const headers = {
            login: 'ann1206',
            passcode: '1122werty1122',
            // additional header
            Accept: '*/*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': true,
        };
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);
        // Subscribe the '/notify' channel
        stompClient.connect(headers, () => {
            stompClient.subscribe('/string', (notification) => {
                // Call the notify function when receive a notification
                console.log('hi', notification);
            });
        });
        this.state = {
            socket: socket,
            massage: [],

        };
    }

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
            search,
            selectedMy,
            selectedShared,
            actions,
            toDoBoard,
            pageSize,
            totalPages,
            sort,
            currentUser,
            tags,
            tagTaskKeys,
            actionsBasket,
        } = this.props;
        return (
            [
                <styled.App key="app">
                    <styled.Head>
                        <styled.SearchContent>
                            <InputLabel htmlFor="select-multiple-chip">Search:</InputLabel>
                                <Search
                                    onChange={this.handleChange}
                                    value={search}
                                    style={{
                                        width: '95%'
                                    }}
                                    placeholder="Search dashboard"
                                />
                        </styled.SearchContent>
                                <DropDownMaterial
                                    visible={true}
                                    value={[
                                        'By id, low to high',
                                        'By id, high to low',
                                        'By Name, a - Z',
                                        'By Name, Z - a',
                                        'By Created Date, low to high',
                                        'By Created Date, high to low',
                                        'By Modified Date, low to high',
                                        'By Modified Date, high to low',
                                    ]}
                                    selectSorting={actions.changeSort}
                                />
                        <MultiSelect />
                    </styled.Head>
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
                                        actionsBasket={actionsBasket}
                                        shared={i.shared}
                                        createdBy={i.createdBy}
                                        modifiedBy={i.modifiedBy}
                                        createdDate={i.createdDate}
                                        modifiedDate={i.modifiedDate}
                                        currentUser={currentUser}
                                        allTags={tags}
                                        todoListStatus={i.todoListStatus}
                                        comment={i.comment}
                                        tagTaskKeys={tagTaskKeys}
                                    />
                                ))
                        }
                    </styled.DashboardList>
                </styled.App>,
                <styled.Footer key="footer">
                    <div style={{ display: 'flex' }}>
                        <styled.Pagination>
                            <ReactPaginate
                                pageCount={totalPages}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                previousLabel="&laquo;"
                                nextLabel="&raquo;"
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
                            stylesContainer="top: -87px;"
                            stylesValues="width: 75px; margin-left: 17px;"
                            stylesButton="padding: 12px 10px; margin: 16px;"
                            tooltip="Change visible lists"
                            placement="right"
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
