import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styledSettings from '../../../container/settings/Settings.styles';
import * as styled from './PopapAddTagToTask.styled';


class PopapAddTagToTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    // changeVisiblePopap = () => {
    //
    //     actions.visiblePopap();
    // };

    render() {
        // const { visible } = this.props;
        return (
            <styledSettings.Window style={{ width: '315px', height: '200px', backgroundColor: 'grey' }}>
               hh
            </styledSettings.Window>
        );
    }
}

PopapAddTagToTask.propTypes = {
};
export default PopapAddTagToTask;
