/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for,react/button-has-type */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import * as styled from './FollowUser.styles';

class FollowUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'none',
            displayMessage: 'none',
        };
    }

    onChangeDisplay = value => this.setState({ display: value });

    render() {
        const {
            actions, userNameList, search, message,
        } = this.props;

        const { displayMessage, display } = this.state;
        return (
            <styled.Follow>
                <styled.Label>Enter username your friends</styled.Label>
                <styled.SearchBlock>
                    <styled.Search>
                        <styled.SearchInput
                            placeholder="Search user..."
                            type="text"
                            value={search}
                            onChange={e => actions.searchUserForFollowing(e.target.value)}
                            onClick={() => {
                                this.setState({ displayMessage: 'none' });
                                this.onChangeDisplay('block');
                            }}
                        />
                        <styled.UsernameList>
                            <ul style={{ display }}>
                                {
                                    userNameList.length === 0
                                        ? (
                                            <styled.Ul>
                                                User with this username not found
                                            </styled.Ul>
                                        )
                                        : userNameList.map((username, i) => i < 15
                                    && (
                                        <li
                                            onClick={() => {
                                                actions.searchUserForFollowing(username);
                                                this.setState({ display: 'none' });
                                            }}
                                        >
                                            {username}
                                        </li>
                                    ))
                                }
                            </ul>
                        </styled.UsernameList>
                    </styled.Search>

                    <styled.SearchUserBtn
                        onClick={() => {
                            actions.searchUserForFollowing('');
                            search && actions.followUser(search);
                            this.onChangeDisplay('none');
                            this.setState({ displayMessage: 'block' });
                        }}
                    > to follow
                    </styled.SearchUserBtn>
                </styled.SearchBlock>
                <styled.Result message={message} style={{ display: displayMessage }}>{message}</styled.Result>
            </styled.Follow>
        );
    }
}

FollowUser.propTypes = {};

export default FollowUser;
