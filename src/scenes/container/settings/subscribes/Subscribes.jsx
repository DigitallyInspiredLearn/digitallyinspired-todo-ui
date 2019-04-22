import React, { Component } from 'react';
import * as styled from './Subscribes.styles';
import { InputLabel } from '../../../../components/dropDown/DropDown.styled';
import Search from '../../../../components/search/Search';
import { SearchContent } from '../../../dashboard/DashboardList.styles';


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
                {/* <Search */}
                {/* value={search} */}
                {/* placeholder="Enter username..." */}
                {/* type="text" */}
                {/* onChange={this.handleChange} */}
                {/* style={{ flex: 'none', border: '5px', boxShadow: '0 0 15px 0 rgba(0,0,0,0.2)', width: '97%', */}
                {/* marginLeft: '8px', borderRadius: '5px', paddingLeft: '8px', height: '34px' }} */}
                {/* /> */}
                <SearchContent style={{ margin: '8px 12px 8px 8px' }}>
                    <InputLabel htmlFor="select-multiple-chip">Search subscribers:</InputLabel>
                    <Search
                        onChange={this.handleChange}
                        value={search}
                        style={{ width: '95%', flex: 'none' }}
                        placeholder="Enter username..."
                    />
                </SearchContent>
                <styled.TableSubscribers>
                    <tbody>
                        <styled.NullTr>
                            <th style={{ padding: '8px' }}>Name</th>
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
