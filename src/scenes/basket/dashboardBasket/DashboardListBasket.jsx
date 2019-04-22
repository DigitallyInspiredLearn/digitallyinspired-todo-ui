/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Link from 'react-router-dom/es/Link';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import * as styledList from '../../list/OneList.styles';
import * as styled from '../../dashboard/DashboardList.styles';
import DropDown from '../../../components/dropDown/DropDown';
import { Dashboard } from '../../dashboard/Dashboard';
import * as styledDialog from '../../../components/dialog/AlertDialog.styles';
import { AlertDialog } from '../../../components/dialog/AlertDialog';

class DashboardListBasket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    componentWillMount = ({ actions } = this.props) => actions.fetchDeletedDashboard();

    handlePageChange = ({ selected }) => {
        const { actions } = this.props;
        actions.changePagination(selected);
    };

    showAlertDialog = () => {
        const { visible } = this.state;
        this.setState({
            visible: !visible,
        });
    };

    render() {
        const {
            actions, toDoBoard, pageSize, totalPages, currentUser,
        } = this.props;
        const { visible } = this.state;
        return (
            [
                <styled.App key="app">
                    <styledList.inputBlock>
                        <Link to="/lists">
                            <styledList.animationButton className="fa fa-arrow-left fa-2x" />
                        </Link>
                        <styledList.titleNameOneList
                            type="text"
                            placeholder="Enter dashboard title"
                            value="Basket page"
                        />
                    </styledList.inputBlock>
                    <styled.DashboardList>
                        {
                            toDoBoard.length === 0
                                ? (
                                    <styled.NullLenghtDashboards>
                                       There are no deleted lists yet.
                                    </styled.NullLenghtDashboards>
                                )
                                : toDoBoard.map(i => (
                                    <Dashboard
                                        userOwnerId={i.userOwnerId}
                                        idList={i.id}
                                        key={i.id}
                                        title={i.todoListName}
                                        tasks={i.tasks}
                                        todoListStatus={i.todoListStatus}
                                        toDoBoard={toDoBoard}
                                        actions={actions}
                                        actionsBasket={actions}
                                        shared={i.shared}
                                        createdBy={i.createdBy}
                                        modifiedBy={i.modifiedBy}
                                        createdDate={i.createdDate}
                                        modifiedDate={i.modifiedDate}
                                        currentUser={currentUser}
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
                        />
                    </div>
                    <IconButton
                        style={{ marginRight: '16px' }}
                        aria-label="deleteForever"
                        alt="Delete forever lists"
                        onClick={this.showAlertDialog}
                    >
                        <DeleteForever
                            alt="Delete forever lists"
                            style={{ fontSize: '40px', color: 'black' }}
                        />
                    </IconButton>
                    <styledDialog.Dialog>
                        <AlertDialog
                            visible={visible}
                            onClose={this.showAlertDialog}
                            value="Do you want to clear basket forever?"
                            onConfirm={actions.deleteAllLists}
                        />
                    </styledDialog.Dialog>
                </styled.Footer>,
            ]
        );
    }
}

// DashboardList.propTypes = {
//     toDoBoard: PropTypes.arrayOf(PropTypes.shape),
// };
//
// DashboardList.defaultProps = {
//     toDoBoard: [],
// };

export default DashboardListBasket;
