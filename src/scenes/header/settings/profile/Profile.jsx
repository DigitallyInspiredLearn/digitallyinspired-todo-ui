/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/profileStyle.css';
import * as styled from './Profile.styles';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newUsername: '',
            newEmail: '',
            newPassword: '',
            newRepeatPassword: '',
        };
    }

    changeValueNewName = e => this.setState({ newName: e.target.value });

    changeValueNewUsername = e => this.setState({ newUsername: e.target.value });

    changeValueNewEmail = e => this.setState({ newEmail: e.target.value });

    changeValueNewPassword = e => this.setState({ newPassword: e.target.value });

    changeValueNewRepeatPassword = e => this.setState({ newRepeatPassword: e.target.value });

    render() {
        const { currentUser, actions, profileVisible } = this.props;
        const { newPassword, newRepeatPassword } = this.state;
        return (
            <div className={profileVisible}>
                <h3>Profile</h3>
                <Link to="/auth">
                    <div className="delete">
                        <styled.DeleteButton
                            className="delete-profile"
                            type="submit"
                            onClick={() => actions.deleteProfile()}
                        >
                        Delete profile
                        </styled.DeleteButton>
                    </div>
                </Link>
                <p className="username"> Hello, {currentUser.name} !</p>
                <p className="email">{currentUser.email}</p>
                <p className="account">Account</p>
                <div className="edit-profile">
                    <div className="profile-values">
                        <p> Name </p>
                        <p> Username </p>
                        <p> Email </p>
                        <p> Password </p>
                        <p> Repeat password </p>
                    </div>
                    <div className="profile-input">
                        <div>
                            <input
                                type="text"
                                placeholder="Name"
                                value={currentUser.name}
                                onChange={this.changeValueNewName}
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                value={currentUser.username}
                                onChange={this.changeValueNewUsername}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={currentUser.email}
                                onChange={this.changeValueNewEmail}
                            />
                            <input
                                type="password"
                                placeholder="Enter new password"
                                value={newPassword}
                                onChange={this.changeValueNewPassword}
                            />
                            <input
                                type="password"
                                placeholder="Repeat new password"
                                value={newRepeatPassword}
                                onChange={this.changeValueNewRepeatPassword}
                            />
                        </div>
                    </div>
                </div>
                <button
                    className="save-profile"
                    type="submit"
                    onClick={() => {
                        if (newPassword === newRepeatPassword
                                            && newPassword.length >= 6) {
                            actions.editProfile({
                                email: currentUser.email,
                                name: currentUser.name,
                                password: newPassword,
                                username: currentUser.username,
                            });
                        }
                    }}
                >
                Save
                </button>
            </div>
        );
    }
}

export default Profile;
