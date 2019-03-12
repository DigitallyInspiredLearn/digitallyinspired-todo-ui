/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from './Profile.styles';
import download from '../../../../image/download.svg';
import Button from '../../../../components/button/Button';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newName: props.currentUser.name || '',
            newUsername: props.currentUser.username || '',
            newEmail: props.currentUser.email || '',
            newPassword: '',
            newRepeatPassword: '',
            selectedAvatar: null,
        };
    }

    componentDidMount = () => {
        const { fetchCurrentUser } = this.props.actions;
        fetchCurrentUser();
    };

    changeValueNewName = e => this.setState({ newName: e.target.value });

    changeValueNewUsername = e => this.setState({ newUsername: e.target.value });

    changeValueNewEmail = e => this.setState({ newEmail: e.target.value });

    changeValueNewPassword = e => this.setState({ newPassword: e.target.value });

    changeValueNewRepeatPassword = e => this.setState({ newRepeatPassword: e.target.value });

    avatarSelectHandler = e => this.setState({ selectedAvatar: e.target.files[0] });

    handleClickDelete = () => {
        const { actions, toggleSettings } = this.props;
        toggleSettings();
        actions.deleteProfile();
    };

    handleClickSave = () => {
        const { actions, currentUser } = this.props;
        const { newPassword, newRepeatPassword } = this.state;
        if (newPassword === newRepeatPassword
            && newPassword.length >= 6) {
            actions.editProfile({
                email: currentUser.email,
                name: currentUser.name,
                password: newPassword,
                username: currentUser.username,
            });
        }
    }

    /* avatarUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedAvatar, this.state.selectedAvatar.name);
        axious.post('some url', fd);
        .then(res => {
        console.log(res);
    }); */

    render() {
        const { currentUser: { name, email } } = this.props;
        const {
            newPassword, newRepeatPassword, newName, newUsername, newEmail,
        } = this.state;
        return (
            <styled.Profile>
                <styled.Username> Hello, {name || 'name'} !</styled.Username>
                <styled.Email>{email || 'email'}</styled.Email>
                <styled.DeleteProfile>
                    <Link to="/auth">
                        <Button
                            onClick={this.handleClickDelete}
                            value="Delete profile"
                        />
                    </Link>
                </styled.DeleteProfile>
                <styled.Account>Account</styled.Account>
                <styled.EditProfile>
                    <styled.Avatar src=" https://www.gravatar.com/avatar/{ currentUser.gravatarUrl }?s=120&d=mp" />
                    <styled.AvatarInput
                        type="file"
                        onChange={this.avatarSelectHandler}
                        ref={avatarInput => this.avatarInput = avatarInput}
                    />
                    <styled.UploadButton type="image" src={download} onClick={() => this.avatarInput.click()} />
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
                                value={newName}
                                onChange={this.changeValueNewName}
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                value={newUsername}
                                onChange={this.changeValueNewUsername}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={newEmail}
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
                <Button
                    onClick={this.handleClickSave}
                    value="Save"
                    style={{ width: '50px', alignSelf: 'flex-end', padding: '6px 8px' }}
                >
                Save
                </Button>
            </styled.Profile>
        );
    }
}
export default Profile;
