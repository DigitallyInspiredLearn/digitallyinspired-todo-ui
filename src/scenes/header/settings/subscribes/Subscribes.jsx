import React, { Component } from 'react';
import * as styled from './Subscribes.styles';

class Subscribes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            displayMessage: 'none',
        };
    }

    // componentWillMount = ({ actions } = this.props) => actions.fetchSubscribers();

    render() {
        const { actions, search, subscribers } = this.props;
        const { displayMessage, display } = this.state;
        return (
            <styled.Subscribes>
                <styled.Title>Subscribes</styled.Title>
                <styled.NotificationMessage>Your subscribers list:</styled.NotificationMessage>
                <styled.SearchInput
                    placeholder="Search user..."
                    type="text"
                    value={search}
                    onClick={() => {
                        this.setState({ displayMessage: 'none' });
                        this.onChangeDisplay('block');
                    }}
                />
                 {/*<label><input type="text" onClick={() => actions.fetchSubscribers()} /></label>*/}
                {
                    // subscribers.map(subscriber => <p>{subscriber}</p>)
                }
            </styled.Subscribes>
        );
    }
}

Subscribes.propTypes = {};
export default Subscribes;
