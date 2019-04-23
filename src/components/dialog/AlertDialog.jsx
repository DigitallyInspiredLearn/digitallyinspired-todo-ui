import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import * as styled from '../dialog/AlertDialog.styles';
import { AlertIcon } from '../../scenes/popup/Popup.styles';

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
                   <styled.Close
                       style={{}}
                       onClick={() => onClose()}
                   />
                   <DialogTitle
                       id="form-dialog-title"
                       style={{padding: '0px', margin: '0px 24px 8px 24px'}}
                   >
                       Dialog
                   </DialogTitle>
               </styled.Content>
               <styled.DialogContentText style={ { margin: '0px 24px 16px 24px' } }>
                   { value }
               </styled.DialogContentText>
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
