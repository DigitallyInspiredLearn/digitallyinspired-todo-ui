/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './css/style.css';
import './css/styleForComp.css';
import MediaQuery from 'react-responsive';
import down from '../../../image/caret-down.svg';
import up from '../../../image/caret-arrow-up.svg';
import Profile from './profile/ProfileContainer';
import Theme from './theme/ThemeContainer';
import Subscribes from './subscribes/SubscribesContainer';
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
            themeVisible: 'theme disable',
            subscribesVisible: 'subscribes disable',
            followersVisible: 'followers disable',
        };
    }

    // componentWillMount = ({ actions } = this.props) => actions.fetchCurrentUser();

    // componentDidMount = () => this.props.actions.fetchCurrentUser();

    showProfile = () => this.setState({
        profileVisible: 'profile',
        themeVisible: 'theme disable',
        subscribesVisible: 'subscribes disable',
        followersVisible: 'followers disable',
    });

    showTheme = () => this.setState({
        profileVisible: 'profile disable',
        themeVisible: 'theme',
        subscribesVisible: 'subscribes disable',
        followersVisible: 'followers disable',
    });

    showSubscribes = () => this.setState({
        profileVisible: 'profile disable',
        themeVisible: 'theme disable',
        subscribesVisible: 'subscribes',
        followersVisible: 'followers disable',
    });

    showFollowers = () => this.setState({
        profileVisible: 'profile disable',
        themeVisible: 'theme disable',
        subscribesVisible: 'subscribes disable',
        followersVisible: 'followers',
    });

    render() {
        const { visible } = this.props;
        const {
            tab1,
            tab2,
            tab3,
            tab4,
            profileVisible,
            themeVisible,
            subscribesVisible,
            followersVisible
        } = this.state;

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
                                    {/*<Profile />*/}
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
                                    <FollowUser />
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
                                        onClick={this.showProfile}
                                    />
                                    Profile
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        onClick={this.showTheme}
                                    />Theme
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        onClick={this.showSubscribes}
                                    />Subscribes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        onClick={this.showFollowers}
                                    />Followers
                                </label>
                            </nav>
                            <main>
                                <Profile profileVisible={profileVisible} />
                                {/*<Theme themeVisible={themeVisible} />*/}
                                {/*<Subscribes subscribesVisible={subscribesVisible} />*/}
                                <FollowUser followersVisible={followersVisible} />
                            </main>
                        </div>
                    </MediaQuery>
                </div>
            </div>
        );
    }
}

export default Settings;
