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

    componentWillMount = ({ actions } = this.props) => actions.fetchSubscribers();

    render() {
        const { actions, search, subscribers } = this.props;
        const { displayMessage, display } = this.state;
        return (
            <styled.Subscribes>
                <styled.NotificationMessage>Your subscribers</styled.NotificationMessage>
                <styled.SearchInput
                    placeholder="Enter username..."
                    type="text"
                    value={search}
                    onClick={() => {
                        this.setState({ displayMessage: 'none' });
                        this.onChangeDisplay('block');
                    }}
                />
                <styled.TableSubscribers>
                    <styled.NullTr>
                        <th style={{ padding: '10px' }}>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </styled.NullTr>
                    {
                        subscribers.length === 0
                            ? (
                                <styled.NullTr>
                                    <td colSpan="3">
                                            You have not subscribers
                                    </td>
                                </styled.NullTr>
                            )
                            : subscribers.map(subscriber => (
                                <styled.Tr>
                                    <styled.Td>{subscriber.name}</styled.Td>
                                    <styled.Td>{subscriber.username}</styled.Td>
                                    <styled.Td>{subscriber.email}</styled.Td>
                                </styled.Tr>
                            ))
                    }
                </styled.TableSubscribers>
            </styled.Subscribes>
        );
    }
}

Subscribes.propTypes = {};
export default Subscribes;
