import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './css/subscribesStyle.css';

class Subscribes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className={this.props.subscribesVisible}>
                Subscribes
            </div>
        );
    }
}

export default Subscribes;
