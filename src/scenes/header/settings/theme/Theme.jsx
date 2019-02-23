import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './css/themeStyle.css';

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={this.props.themeVisible}>
                Theme
            </div>
        );
    }
}

export default Theme;
