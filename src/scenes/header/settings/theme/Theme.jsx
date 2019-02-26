import React, { Component } from 'react';
import * as styled from './Theme.styles';

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <styled.Theme>
                <h2>Theme</h2>
            </styled.Theme>
        );
    }
}

export default Theme;
