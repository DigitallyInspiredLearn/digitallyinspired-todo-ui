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

    changeValueNewName = e => this.setState({ newName: e.target.value });

    changeValueNewUsername = e => this.setState({ newUsername: e.target.value });

    changeValueNewEmail = e => this.setState({ newEmail: e.target.value });

    changeValueNewPassword = e => this.setState({ newPassword: e.target.value });

    changeValueNewRepeatPassword = e => this.setState({ newRepeatPassword: e.target.value });

    avatarSelectHandler = e => this.setState({ selectedAvatar: e.target.files[0] });

    componentWillMount = () => {
        const { actions: { fetchCurrentUser } } = this.props;
        fetchCurrentUser();
    };

    handleClickDelete = () => {
        const { actions, toggleSettings } = this.props;
        toggleSettings();
        actions.deleteProfile();
    };

    handleClickSave = () => {
        const { actions } = this.props;
        const {
            newName, newUsername, newEmail, newPassword, newRepeatPassword,
        } = this.state;
        if (newPassword === newRepeatPassword
            && newPassword.length >= 6) {
            actions.editProfile({
                email: newEmail,
                name: newName,
                password: newPassword,
                username: newUsername,
            });
        }
    };

    /* avatarUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedAvatar, this.state.selectedAvatar.name);
        axious.post('some url', fd);
        .then(res => {
        console.log(res);
    }); */

    render() {
        const { currentUser: { name, email, gravatarUrl }, statistics } = this.props;
        const {
            newPassword, newRepeatPassword, newName, newUsername, newEmail,
        } = this.state;
        return (
            <styled.Profile>
                <styled.GreetingUser>
                    <styled.Avatar src={`${gravatarUrl}?s=120&d=retro`} />
                    {/*<styled.AvatarInput*/}
                        {/*type="file"*/}
                        {/*onChange={this.avatarSelectHandler}*/}
                        {/*ref={avatarInput => this.avatarInput = avatarInput}*/}
                    {/*/>*/}
                    {/*<styled.UploadButton type="image" src={download} onClick={() => this.avatarInput.click()} />*/}
                    <styled.CurrentUser>
                        <p> Hello, {name || 'name'} !</p>
                        <p>{email || 'email'}</p>
                    </styled.CurrentUser>
                    <styled.DeleteProfile>
                        <Link to="/auth">
                            <Button
                                onClick={this.handleClickDelete}
                                value="Delete profile"
                                style={{ height: 'auto', padding: '4px 8px' }}
                            />
                        </Link>
                    </styled.DeleteProfile>
                </styled.GreetingUser>
                <styled.Account>Account</styled.Account>
                <styled.Info>
                    <styled.EditProfile>
                        <p> Name </p>
                        <input
                            type="text"
                            placeholder="Name"
                            value={newName}
                            onChange={this.changeValueNewName}
                        />
                    </styled.EditProfile>
                    <styled.EditProfile>
                        <p> Username </p>
                        <input
                            type="text"
                            placeholder="Username"
                            value={newUsername}
                            onChange={this.changeValueNewUsername}
                        />
                    </styled.EditProfile>
                    <styled.EditProfile>
                        <p> Email </p>
                        <input
                            type="email"
                            placeholder="Email"
                            value={newEmail}
                            onChange={this.changeValueNewEmail}
                        />
                    </styled.EditProfile>
                    <styled.EditProfile>
                        <p> Password </p>
                        <input
                            type="password"
                            placeholder="Enter new password"
                            value={newPassword}
                            onChange={this.changeValueNewPassword}
                        />
                    </styled.EditProfile>
                    <styled.EditProfile>
                        <p> Repeat password </p>
                        <input
                            type="password"
                            placeholder="Repeat new password"
                            value={newRepeatPassword}
                            onChange={this.changeValueNewRepeatPassword}
                        />
                    </styled.EditProfile>
                    <Button
                        onClick={this.handleClickSave}
                        value="Save"
                        style={{
                            width: 'auto', minWidth: '80px', alignSelf: 'flex-end', padding: '4px 8px', margin: '8px',
                        }}
                    >
                            Save
                    </Button>
                </styled.Info>
                <styled.Statistics>
                    <h1>Profile statistics</h1>
                    <p> { `Number of lists: ${statistics.todoListsNumber}` } </p>
                    <p> { `Number of tasks: ${statistics.tasksNumber}`} </p>
                    <p> { `Number of completed tasks:  ${statistics.completedTasksNumber}` } </p>
                    <p> { `Number of subscribers: ${statistics.followersNumber}`} </p>
                    <p> { `Number of followers: ${statistics.followedUsersNumber}`} </p>
                </styled.Statistics>
            </styled.Profile>
        );
    }
}
export default Profile;
