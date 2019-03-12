import React, { Component } from 'react';
import * as styled from './Subscribes.styles';

class Subscribes extends Component {
    componentWillMount = ({ actions } = this.props) => actions.fetchSubscribers();

    render() {
        const { actions, search, subscribers } = this.props;
        return (
            <styled.Subscribes>
                <styled.Title> Your subscribers list</styled.Title>
                <styled.SearchInput
                    placeholder="Enter username..."
                    type="text"
                    onChange={(e) => { actions.searchSubscribers(e.target.value); }}
                />
                <styled.TableSubscribers>
                    <tbody>
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
                                    <styled.Tr key={subscriber}>
                                        <styled.Td key={subscriber.name}>{subscriber.name}</styled.Td>
                                        <styled.Td key={subscriber.username}>{subscriber.username}</styled.Td>
                                        <styled.Td key={subscriber.email}>{subscriber.email}</styled.Td>
                                    </styled.Tr>
                                ))
                        }
                    </tbody>
                </styled.TableSubscribers>
            </styled.Subscribes>
        );
    }
}

Subscribes.propTypes = {};
export default Subscribes;
