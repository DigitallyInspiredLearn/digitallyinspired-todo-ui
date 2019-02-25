import React, { Component } from 'react';
// import Tabs, { Pane } from './Tabs';
import { Link } from 'react-router-dom';
import './css/style.css';
import './css/styleForComp.css';
import MediaQuery from 'react-responsive';
import down from '../../../image/caret-down.svg';
import up from '../../../image/caret-arrow-up.svg';
import FollowUser from './followUser/FollowUserContainer';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: down,
            tab2: down,
            tab3: down,
            tab4: down,
            profileVisible: 'profile',
            themeVisible: 'theme.disable',
            subscribesVisible: 'subscribes.disable',
            followersVisible: 'followers.disable',
            newName: '',
            newUsername: '',
            newEmail: '',
            newPassword: '',
            newRepeatPassword: '',
        };
    }

    //componentWillMount = ({ actions } = this.props) => actions.fetchCurrentUser();

    // componentDidMount = () => this.props.actions.fetchCurrentUser();

    changeValueNewName = e => this.setState({
        newName: e.target.value,
    });

    changeValueNewUsername = e => this.setState({
        newUsername: e.target.value,
    });

    changeValueNewEmail = e => this.setState({
        newEmail: e.target.value,
    });

    changeValueNewPassword = e => this.setState({
        newPassword: e.target.value,
    });

    changeValueNewRepeatPassword = e => this.setState({
        newRepeatPassword: e.target.value,
    });


    render() {
        // console.log(this.props);
        const { visible, currentUser, actions } = this.props;
        const {
            tab1, tab2, tab3, tab4,
        } = this.state;
        
        // this.setState({
        //     newUsername: this.props.currentUser.username,
        // });

        return (
            <div style={{ display: visible ? 'flex' : 'none' }}>
                <div id="fon" style={{ backgroundColor: 'whitesmoke', opacity: 0.98, zIndex: 1000 }} />
                <div id="settingsWindow">
                    <MediaQuery maxWidth={649}>
                        <nav id="tabContainer">
                            <div>
                                <div className="tab">
                                    <h2>Profile</h2>
                                    <img
                                        src={tab1}
                                        className="up-down"
                                        onClick={() => this.setState({ tab1: tab1 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab1 === up ? 'flex' : 'none' }}>
                                    <div>Profile</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Theme</h2>
                                    <img
                                        src={tab2}
                                        className="up-down"
                                        onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab2 === up ? 'flex' : 'none' }}>
                                    <div>Theme</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Subscribes </h2>
                                    <img
                                        src={tab3}
                                        className="up-down"
                                        onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab3 === up ? 'flex' : 'none' }}>
                                    <div>Subscribes</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <div className="tab">
                                    <h2>Followers</h2>
                                    <img
                                        src={tab4}
                                        className="up-down"
                                        onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                    />
                                </div>
                                <div className="content" style={{ display: tab4 === up ? 'flex' : 'none' }}>
                                    <div>Followers</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                        </nav>
                    </MediaQuery>
                    <MediaQuery minWidth={650}>
                        <div id="settingsWindowForComp">
                            <nav id="tabContainerComp">
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ checked1: !checked1 })}
                                        // checked={checked1}
                                    />Profile
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                    />Theme
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                    />Subscribes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        // onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                    />Followers
                                </label>
                            </nav>
                            <main>
                                {/* <div style={{display: tab1 === up ? 'flex' : 'none'}}>Profile</div> */}
                                {/* <div style={{display: tab2 === up ? 'flex' : 'none'}}>Theme</div> */}
                                {/* <div style={{display: tab3 === up ? 'flex' : 'none'}}>Subscribes</div> */}
                                {/* <div style={{display: tab4 === up ? 'flex' : 'none'}}>Followers</div> */}
                                <div className={this.state.profileVisible} >
                                    <h3>Profile</h3>
                                    <Link to="/auth">
                                        <div className="delete">
                                            <button
                                                className="delete-profile"
                                                type="submit"
                                                onClick={() => actions.deleteProfile()}
                                            >
                                                Delete profile
                                            </button>
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
                                                    value={this.state.newPassword}
                                                    onChange={this.changeValueNewPassword}
                                                />
                                                <input
                                                    type="password"
                                                    placeholder="Repeat new password"
                                                    value={this.state.newRepeatPassword}
                                                    onChange={this.changeValueNewRepeatPassword}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="save-profile"
                                        type="submit"
                                        onClick={() => {
                                            if (this.state.newPassword === this.state.newRepeatPassword
                                            && this.state.newPassword.length >= 6) {
                                                actions.editProfile({
                                                    email: this.props.currentUser.email,
                                                    name: this.props.currentUser.name,
                                                    password: this.state.newPassword,
                                                    username: this.props.currentUser.username,
                                                });
                                            }
                                        }}
                                    >
                                        Save
                                    </button>
                                </div>
                                <div className="theme">
                                    Theme
                                </div>
                                <div className="subscribes">
                                    Subscribes
                                </div>
                                <div className="followers">
                                    Followers
                                </div>
                                {/* <FollowUser/> */}
                            </main>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Settings;


{ /* <div> */ }
{ /* <Tabs selected={0}> */ }
{ /* <Pane label="Tab 1"> */ }
{ /* <div>This is my tab 1 contents!</div> */ }
{ /* </Pane> */ }
{ /* <Pane label="Tab 2"> */ }
{ /* <div>This is my tab 2 contents!</div> */ }
{ /* </Pane> */ }
{ /* <Pane label="Tab 3"> */ }
{ /* <div>This is my tab 3 contents!</div> */ }
{ /* </Pane> */ }
{ /* </Tabs> */ }
{ /* </div> */ }
