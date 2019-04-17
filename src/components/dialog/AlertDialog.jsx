import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import AlertIcon from '@material-ui/icons/ErrorOutline'
import * as styled from '../dialog/AlertDialog.styles';

export class AlertDialog extends Component {

    render() {
        const { visible, value, onClose, onConfirm } = this.props;
        return (
           <Dialog
                open={visible}
                onClose={onClose}
           >
               <styled.Content>
                   <AlertIcon
                           style={{margin: '16px 24px 16px 24px'}}
                   />
                   <DialogTitle
                           id="form-dialog-title"
                           style={{width: '370px', padding: '8px'}}
                   >
                       Dialog
                   </DialogTitle>
                   <styled.closeWindow
                       onClick={() => onClose()}
                   >&times;
                   </styled.closeWindow>
               </styled.Content>
               <DialogContentText
                   style={{
                       margin: '0px 24px 16px 24px',
                       padding: '16px',
                       width: '400px',
                       border: 'rgb(128, 128, 128, 0.1) solid 1px',
                       borderRadius: '8px'
                   }}
               >
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