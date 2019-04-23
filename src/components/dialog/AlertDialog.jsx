import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import * as styled from '../dialog/AlertDialog.styles';
import { AlertIcon } from '../../scenes/popup/Popup.styles';
import { DialogContentText } from '../dialog/AlertDialog.styles';

export class AlertDialog extends Component {
    render() {
        const {
            visible, value, onClose, onConfirm,
        } = this.props;
        return (
           <Dialog
               open={visible}
               onClose={onClose}
           >
               <styled.Content>
                   <AlertIcon />
                   <DialogTitle
                       id="form-dialog-title"
                   >
                       Dialog
                   </DialogTitle>
                   <styled.closeWindow
                       onClick={() => onClose()}
                   >&times;
                   </styled.closeWindow>
               </styled.Content>
               <DialogContentText style={ { margin: '16px 24px 16px 24px' } }>
                   { value }
               </DialogContentText>
               <DialogActions>
                   <Button
                       onClick={onClose}
                       color="primary"
                   >
                       Cancel
                   </Button>
                   <Button
                       onClick={() => {
                           onConfirm();
                           onClose();
                       }}
                       color="primary"
                   >
                       Enter
                   </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
