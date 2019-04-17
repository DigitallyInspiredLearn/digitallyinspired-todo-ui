import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SockJS from 'sockjs-client';
import { Stomp } from '@stomp/stompjs';
import SnackbarContent from '@material-ui/core/SnackbarContent/index';
import IconButton from '@material-ui/core/IconButton/index';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import Snackbar from '@material-ui/core/Snackbar/index';
import { connect } from 'react-redux';

class WebSocketContainer extends Component {
    constructor(props) {
        super(props);
        const { currentUser } = props;
        this.state = {
            message: '',
            open: false,
        };

        let stompClient = null;
        const headers = {
            Accept: '*/*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': true,
        };
        const socket = new SockJS('http://localhost:8080/ws');
        stompClient = Stomp.over(socket);

        stompClient.connect(headers, () => {
            const { open } = this.state;
            stompClient.subscribe(`/${currentUser}`, (notification) => {
                this.setState({ message: notification.body, open: !open });
            });
        });
    }

    handleClose = () => this.setState({ open: false });

    render() {
        const { message, open } = this.state;
        const { children } = this.props;
        return (
            <div>
                { children }
                <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    style={{ margin: ' 0 -12px -16px 0' }}
                    open={open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    autoHideDuration={6000}
                >
                    <SnackbarContent
                        style={{}}
                        aria-describedby="client-snackbar"
                        message={(<span id="id">{message}</span>)}
                        action={[
                            <IconButton
                                key="close"
                                href=""
                                aria-label="Close"
                                color="inherit"
                                onClick={this.handleClose}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </Snackbar>
            </div>
        );
    }
}


WebSocketContainer.propTypes = {
    // children: PropTypes.object.isRequired,
    currentUser: PropTypes.string,
};

WebSocketContainer.defaultProps = {
    // children: {},
    currentUser: '',
};

const mapStateToProps = state => ({
    currentUser: state.auth.user,
});

export default connect(mapStateToProps)(WebSocketContainer);
