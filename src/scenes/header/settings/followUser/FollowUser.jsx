/* eslint-disable react/prop-types,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for,react/button-has-type */
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './css/followersStyle.css';

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
            <div className={this.props.followersVisible}>
                <h2>Follow User</h2>
                <main>
                    <label>
                        Enter username your friends
                        <input
                            type="text"
                            value={search}
                            onChange={e => actions.searchUserForFollowing(e.target.value)}
                            onClick={() => {
                                this.setState({ displayMessage: 'none' });
                                this.onChangeDisplay('block');
                            }}
                        />
                    </label>
                    <button
                        onClick={() => {
                            actions.searchUserForFollowing('');
                            search && actions.followUser(search);
                            this.onChangeDisplay('none');
                            this.setState({ displayMessage: 'block' });
                        }}
                    > to follow
                    </button>
                    <p style={{ display: displayMessage }}>{message}</p>
                    <div id="usernameList">
                        <ul style={{ display }}>
                            {
                                // userNameList.length = 0 ? <li>User with this username not found</li> :
                                userNameList.map((username, i) => i < 15
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

                    </div>

                </main>
            </div>
        );
    }
}

FollowUser.propTypes = {};

export default FollowUser;
