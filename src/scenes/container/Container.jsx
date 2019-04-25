import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { bindActionCreators } from 'redux';
import Tooltip from '@material-ui/core/Tooltip';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Settings from './settings/SettingsContainer';
import * as styled from './Container.styles';
import { actions } from '../account/authorization/duck';
import history from '../../config/history';
import * as styledDialog from '../../components/dialog/AlertDialog.styles';
import { AlertDialog } from '../../components/dialog/AlertDialog';
import list from '../../image/list-menu.svg';
import account from '../../image/account.svg';
import basket from '../../image/delete.svg';
import settings from '../../image/settings.svg';
import exit from '../../image/exit.svg';
import {Redirect, Route, Switch} from "react-router-dom";
import HeaderToolbar from '../dashboard/heaaderToolbar/HeaderToolbarContainer';

const styles = () => ({
    typography: {
        padding: '8px',
    },
});

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            visibleDialog: false,
            anchorEl: null,
            open: false,
        };
    }

    handlerAccountClick = () => {
        history.push('/lists/account');
        this.setState(state => ({
            open: false,
        }));
    };

    handlerBasketClick = () => {
        history.push('/lists/basket');
        this.setState(state => ({
            open: false,
        }));
    };

    openSettings = () => {
        const { visible } = this.state;
        this.setState(state => ({ visible: !visible, open: false }));
    };

    closeSettings = () => {
        const { visible } = this.state;
        this.setState(({ visible: !visible }));
    };

    showAlertDialog = () => {
        const { visibleDialog } = this.state;
        this.setState(state => ({
            visibleDialog: !visibleDialog,
            open: false,
        }));
    };

    handleClick = (event) => {
        const { currentTarget } = event;
        this.setState(state => ({
            anchorEl: currentTarget,
            open: !state.open,
        }));
    };

    render() {
        const {
            visible, visibleDialog, anchorEl, open,
        } = this.state;
        const { location: { pathname } } = history;
        const {
            children, data, actions, classes,
        } = this.props;
        const iconVisible = (pathname === '/reg' || pathname === '/auth') ? 'none' : 'inherit';
        return (
            <ThemeProvider theme={data}>
                <styled.Container>
                    <styled.Header>
                        <styled.Logo
                            id="Layer"
                            data-name="Logo"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 217.88 140.1"
                            onClick={() => history.push('/lists')}
                        >
                            <path
                                d="M288.2,248h69.2c4,0,4.8,1,4.1,4.9l-13.5,81c-2.8,
                                    16.6-5.5,33.2-8.3,49.8-.5,3.3-1.7,4.2-5,
                                    4.2H219.1c-5.5,0-5.8-.5-4.9-5.9,4.3-25,
                                    8.6-50.1,12.9-75.1.1-.3.1-.7.2-1.1.7-3.9,1.5-4.7,
                                    5.5-4.7h30.7c2.8.1,4.1,1.8,3.6,4.5-2.5,13-4.9,26.1-7.4,
                                    39.1-.5,2.6-1,5.2-1.4,7.8-.5,3.3.7,4.6,4,4.6h39.2c2,
                                    0,3.1-.7,3.5-2.6,1.2-6.1,2.4-12.1,3.4-18.2q4.35-25.8,
                                    8.6-51.6a10.12,10.12,0,0,0,.2-3,2.81,2.81,0,0,
                                    0-3.1-3h-100c-2.5-.1-3.4-1-3.1-3.4.6-5.7,1.3-11.4,
                                    1.9-17.1.3-2.3.5-4.5.7-6.8a3.46,3.46,0,0,
                                    1,3.5-3.4c1.1-.1,2.1-.1,3.2-.1Q254.2,248.05,288.2,248Z"
                                transform="translate(-210.94 -247.9)"
                            />
                            <path
                                d="M409.5,248h15.8c2.9,0,3.9,1.3,3.4,4.2q-8.7,
                                    52.65-17.5,105.2c-1.5,9-3,18.1-4.5,27.1-.4,2.5-1.5,
                                    3.4-4,3.5H371.4c-3.2,0-4.3-1.2-3.7-4.3,2.7-16.6,
                                    5.5-33.2,8.3-49.7l13.5-81c.7-4.3,1.2-4.8,
                                    5.6-4.8C399.9,248,404.7,248,409.5,248Z"
                                transform="translate(-210.94 -247.9)"
                            />
                        </styled.Logo>
                        <b>To</b>
                        <styled.Line />
                        <b>do</b>
                        <Switch>
                            <Route path="/lists/account" component={null} />
                            <Route path="/lists/:id" component={null} />
                            <Route path="/lists" component={HeaderToolbar} />
                            <Route path="/lists/basket" component={null} />
                            <Route path="/auth" component={null} />
                            <Route path="/reg" component={null} />
                            <Route path="/error404" component={null} />
                            <Route path="/error500" component={null} />
                            <Redirect to="/auth" />
                        </Switch>
                        <styled.Icon
                            src={list}
                            alt="settings"
                            onClick={this.handleClick}
                            style={{
                                display: iconVisible, width: '35px', height: '37px',
                            }}
                        />

                        <Popper placement="bottom" open={open} anchorEl={anchorEl} transition style={{ zIndex: 1000 }}>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Paper>
                                        <Typography
                                            className={classes.typography}
                                        >
                                            <Tooltip title="Account">
                                                <styled.Icon
                                                    src={account}
                                                    alt="account"
                                                    onClick={this.handlerAccountClick}
                                                />
                                            </Tooltip>
                                            <Tooltip title="Settings">
                                                <styled.Icon
                                                    src={settings}
                                                    alt="logout"
                                                    onClick={this.openSettings}
                                                />
                                            </Tooltip>
                                            <Tooltip title="Basket page">
                                                <styled.Icon
                                                    src={basket}
                                                    alt="logout"
                                                    onClick={this.handlerBasketClick}
                                                />
                                            </Tooltip>
                                            <Tooltip title="Logout">
                                                <styled.Icon
                                                    src={exit}
                                                    alt="logout"
                                                    onClick={this.showAlertDialog}
                                                />
                                            </Tooltip>
                                        </Typography>
                                    </Paper>
                                </Fade>
                            )}
                        </Popper>
                        <styledDialog.Dialog>
                            <AlertDialog
                                visible={visibleDialog}
                                onClose={this.showAlertDialog}
                                value="Do you want to logout?"
                                onConfirm={actions.logout}
                            />
                        </styledDialog.Dialog>
                    </styled.Header>
                    <Settings visible={visible} closeSettings={this.closeSettings} />
                    { children }
                </styled.Container>
            </ThemeProvider>
        );
    }
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
    data: state.theme.data,
    sort: state.dashboard.sort,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        logout: actions.logout,
    }, dispatch),
    actionsPagination: bindActionCreators({
        changePagination: actions.changePagination,
        refreshToken: actions.refreshToken,
    }, dispatch),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Container));
