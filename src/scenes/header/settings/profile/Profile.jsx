/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from './Profile.styles';
import axios from 'axios/index';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: '',
            newUsername: '',
            newEmail: '',
            newPassword: '',
            newRepeatPassword: '',
            selectedAvatar: null,
        };
    }

    // componentDidMount = () => this.props.actions.fetchCurrentUser();

    changeValueNewName = e => this.setState({ newName: e.target.value });

    changeValueNewUsername = e => this.setState({ newUsername: e.target.value });

    changeValueNewEmail = e => this.setState({ newEmail: e.target.value });

    changeValueNewPassword = e => this.setState({ newPassword: e.target.value });

    changeValueNewRepeatPassword = e => this.setState({ newRepeatPassword: e.target.value });

    avatarSelectHandler = event => { this.setState({ selectedAvatar: event.target.files[0] }); }

    /*avatarUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedAvatar, this.state.selectedAvatar.name);
    }*/

    render() {
        const { currentUser, actions, toggleSettings } = this.props;
        const { newPassword, newRepeatPassword } = this.state;
        return (
            <styled.Profile>
                <styled.Username> Hello, {currentUser.name ? currentUser.name : 'name'} !</styled.Username>
                <styled.Email>{currentUser.email ? currentUser.email : 'email'}</styled.Email>
                <styled.Avatar src="https://www.gravatar.com/avatar/null?s=110&d=mp" />
                <styled.AvararInput type="file" onChange={this.avatarSelectHandler}/>
                <styled.DeleteProfile>
                    <Link to="/auth">
                        <styled.DeleteButton
                            type="submit"
                            onClick={() => {
                                toggleSettings();
                                actions.deleteProfile();
                            }}
                        >
                            Delete profile
                        </styled.DeleteButton>
                    </Link>
                </styled.DeleteProfile>
                <styled.Account>Account</styled.Account>
                <styled.EditProfile>
                    <styled.ProfileValues>
                        <p> Name </p>
                        <p> Username </p>
                        <p> Email </p>
                        <p> Password </p>
                        <p> Repeat password </p>
                    </styled.ProfileValues>
                    <styled.ProfileInput>
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
                    </styled.ProfileInput>
                </styled.EditProfile>
                <styled.SaveButton
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
                </styled.SaveButton>
            </styled.Profile>
        );
    }
}

export default Profile;
