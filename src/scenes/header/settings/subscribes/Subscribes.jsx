import React, { Component } from 'react';
import * as styled from './Subscribes.styles';
import Search from '../../../../components/search/Search';

class Subscribes extends Component {

    componentWillMount = ({ actions } = this.props) => actions.fetchSubscribers();

    handleChange = (newValue) => {
        const { actions } = this.props;
        actions.searchSubscribers(newValue);
    };

    render() {
        const { actions, search, subscribers } = this.props;
        return (
            <styled.Subscribes>
                <styled.Title> Your subscribers list</styled.Title>
                <Search
                    value={search}
                    placeholder="Enter username..."
                    type="text"
                    onChange={this.handleChange}
                    style={{ flex: 'none', border: '5px', boxShadow: '0 0 15px 0 rgba(0,0,0,0.2)', width: '97%',
                        marginLeft: '10px', borderRadius: '5px', paddingLeft: '10px', height: '34px' }}
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
