// import PropTypes from 'prop-types';
import React, { Component } from 'react';

class FollowUser extends Component {
    render() {
        // { userNameList } = this.props;
        const userNameList = [
            'aaa', 'bbb',
            'aaa', 'bbb',
            'aaa', 'bbb',
            'aaa', 'bbb',
            'aaalast', 'bbb',
            '111', 'bbb',
            'aaa', 'bbb',
            'aaa', 'bbb',
            'aaa', 'bbb',
        ];
        return (
            <div id="followUserContainer">
                <h2>Follow User</h2>
                <main>
                    <label>Enter username your friends<input type="text" /></label>
                    <div id="usernameList">
                        <ul>
                            {
                                userNameList.map((username, i) => i < 7 && <li>{username}</li>)
                            }
                        </ul>
                        <button>to follow</button>
                    </div>

                </main>
            </div>
        );
    }
}

FollowUser.propTypes = {};

export default FollowUser;
