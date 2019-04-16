import React, { Component } from 'react';
import * as styled from '../../scenes/popup/Popup.styles';

export class AlertDialog extends Component {

    // handleChange = (newValue) => {
    //     const { actions } = this.props;
    //     actions.searchUser(newValue);
    // };

    render() {
        const { visible } = this.props;
        return (
            <styled.showPopup>
                <styled.popupContent>
                </styled.popupContent>
            </styled.showPopup>

        );
    }
}