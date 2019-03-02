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
