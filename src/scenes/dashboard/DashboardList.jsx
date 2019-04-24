/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Dashboard } from './Dashboard';
import * as styled from './DashboardList.styles';
import Search from '../../components/search/Search';
import VisibleSidebar from './sidebar/SidebarContainer';
import MultiSelect from './multiSelect/MultiSelectContainet';
import { Alert } from '../../components/dialog/Alert';
import { DropDownMaterial } from '../../components/dropDown/DropDownMaterial';
import { InputLabel } from '../../components/dropDown/DropDown.styled';

class DashboardList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alignment: 'my',
            visible: false,
        };
    }

    componentWillMount = ({ actions } = this.props) => actions.initialize();

    componentWillUnmount = () => {
        const { actions } = this.props;
        this.setState(
            { alignment: 'my' },
            () => actions.updateViewLists('my'),
        );
        // actions.clean();
    };

    showAlert = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    };



    handleAlignment = () => {
        const { actions } = this.props;
        const { alignment } = this.state;
        const value = alignment === 'my' ? 'shared' : alignment === 'shared' && 'my';
        this.setState({ alignment: value }, () => actions.updateViewLists(value));
    };

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
            actions,
            toDoBoard,
            pageSize,
            totalPages,
            currentUser,
            tags,
            tagTaskKeys,
            actionsBasket,
            sort,
            errorMessage,
        } = this.props;
        const { alignment, visible } = this.state;
        return ([
            // [<Alert
            //     visible={errorMessage === '' ? visible : this.showAlert}
            //     onClose={this.showAlert}
            //     value={errorMessage}
            // />,
                <styled.App key="app">
                    <Alert
                        visible={visible}
                        onClose={this.showAlert}
                        value={errorMessage}
                    />
                    <styled.Head>
                        <styled.SearchContent>
                            <InputLabel htmlFor="select-multiple-chip">Search:</InputLabel>
                            <Search
                                onChange={this.handleChange}
                                value={search}
                                style={{
                                    width: '95%',
                                }}
                                placeholder="Search dashboard"
                            />
                        </styled.SearchContent>
                        <DropDownMaterial
                            label="Sorting: "
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
                            defaultValue={sort}
                        />
                        <MultiSelect />
                        <styled.CheckboxDiv style={{ padding: 0, margin: 0 }}>
                            <InputLabel htmlFor="select-multiple-chip">View lists:</InputLabel>
                            <styled.ToggleButtonGroup
                                style={{
                                    backgroundColor: 'white',
                                    boxShadow: '0 0  4px 0  rgba(0,0,0,0.2)',
                                    borderBottom: '1px solid grey',
                                    margin: '6px 16px 4px 8px',
                                    borderRadius: '4px',
                                }}
                                value={alignment}
                                exclusive
                                onChange={this.handleAlignment}
                            >
                                <styled.ToggleButton
                                    style={{
                                        color: 'black',
                                        height: '52px',
                                        display: 'flex',
                                        alignSelf: 'center',
                                        borderRight: '1px solid lightgrey',
                                    }}
                                    value="my"
                                >
                                    My
                                </styled.ToggleButton>
                                <styled.ToggleButton
                                    style={{
                                        color: 'black',
                                        height: '52px',
                                        display: 'flex',
                                        alignSelf: 'center',
                                    }}
                                    value="shared"
                                >
                                    Shared
                                </styled.ToggleButton>
                            </styled.ToggleButtonGroup>
                        </styled.CheckboxDiv>
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
                        <DropDownMaterial
                            style={{ width: '150px', height: '42px', marginTop: '4px' }}
                            styleLabel={{ fontSize: '10px' }}
                            value={[
                                '4/page',
                                '8/page',
                                '16/page',
                            ]}
                            selectSorting={actions.changeSize}
                            defaultValue={pageSize}
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
