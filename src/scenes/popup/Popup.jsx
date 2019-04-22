import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './Popup.styles';
import * as styled from '../../components/dialog/AlertDialog.styles';
import Search from '../../components/search/Search';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { SearchContent} from '../dashboard/DashboardList.styles';
import { AlertIcon } from './Popup.styles';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foundUser: false,
        }
    }

    handleChange = (newValue) => {
        const { actions } = this.props;
        actions.searchUser(newValue);
    };

    render() {
        const { statePopup, closePopup, actions, actionsBoard, users, search, idList } = this.props;
        const { foundUser } = this.state;
        return (
            <Dialog
                open={statePopup}
                onClose={closePopup}
            >
                <styled.Content>
                    <AlertIcon />
                    <DialogTitle
                        id="form-dialog-title"
                    >
                        Share list
                    </DialogTitle>
                    <styled.closeWindow
                        onClick={() => {
                            closePopup();
                            actions.searchUser('');
                        }}
                    >&times;
                    </styled.closeWindow>
                </styled.Content>
                    <SearchContent style={{margin: '0px 16px 24px 24px',}}>
                        <Search
                            onChange={this.handleChange}
                            value={search}
                            style={{
                                width: '95%',
                            }}
                            placeholder="Enter username ..."
                        />
                    </SearchContent>
                <DialogActions style={{margin: '32px 8px 8px 8px',
                }}>
                    <Button
                        onClick={() => {
                            closePopup();
                            actions.searchUser('');
                        }}
                        color="primary"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() =>
                        {
                            const conformity = users.map(i => {
                                return search !== i;
                            });
                            if (users[0] === 'User is not found!' || search === '' || conformity[0] === true) {
                                alert('Data is not correct!');
                            }
                            else {
                                actionsBoard.shareList({ idList, userName: search });
                                closePopup();
                                actions.searchUser('');
                            }
                        }}
                        color="primary"
                    >
                        Enter
                    </Button>
                    <styles.users search={search} foundUser={foundUser}>
                    {
                        users.map(i => (
                            search === i ? null : i === 'User is not found!' ?
                                <List>
                                    <ListItemText primary={i}/>
                                </List> :
                                <div onClick={() => actions.searchUser(i)}>
                                    <List>
                                        <ListItemText primary={i}/>
                                    </List>
                                </div>),
                        )
                    }
                    </styles.users>
                </DialogActions>
            </Dialog>
        );
    }
}

Popup.propTypes = {
    users: PropTypes.array.isRequired,
    idList: PropTypes.number,
    search: PropTypes.string,
};

Popup.defaultProps = {
    users: [],
};
