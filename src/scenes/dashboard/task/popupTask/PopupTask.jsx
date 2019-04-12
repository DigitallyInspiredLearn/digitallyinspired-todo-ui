import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styled from './PopupTask.styles';

export default class PopupTask extends Component{
    render(){
        const { statePopup, closePopup, actions, actionsBoard, users, search, idList } = this.props;
        return (
            <styled.showPopup show={statePopup}>

            </styled.showPopup>
        );
    }
}