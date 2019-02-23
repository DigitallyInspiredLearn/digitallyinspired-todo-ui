/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for,react/button-has-type */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Subscribes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentWillMount = ({ actions } = this.props) => actions.fetchSubscribers();

    render() {
        const { actions, search, subscribers } = this.props;

        const { } = this.state;

        return (
            <div id="followUserContainer">
                <h2>Subscribes</h2>

                <label><input type="text" onClick={() => actions.fetchSubscribers()} /></label>
                {
                    subscribers.map(subscriber => <p>{subscriber}</p>)
                }
            </div>
        );
    }
}

Subscribes.propTypes = {};

export default Subscribes;
