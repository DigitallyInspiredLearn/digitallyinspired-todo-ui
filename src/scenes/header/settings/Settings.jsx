import React, { Component } from 'react';
import './css/style.css';
import MediaQuery from 'react-responsive';
import down from '../../../image/caret-down.svg';
import up from '../../../image/caret-arrow-up.svg';
import Profile from './profile/ProfileContainer';
import Theme from './theme/ThemeContainer';
import Subscribes from './subscribes/SubscribesContainer';
import FollowUser from './followUser/FollowUserContainer';
import * as styled from './Settings.styles';

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
        // console.log(this.props);
        const { visible } = this.props;
        const {
            tab1, tab2, tab3, tab4,
        } = this.state;
        
        // this.setState({
        //     newUsername: this.props.currentUser.username,
        // });

        return (
            <div style={{ display: visible ? 'flex' : 'none' }}>
                <div id="fon" style={{ backgroundColor: 'whitesmoke', opacity: 0.98, zIndex: 1000 }} />
                <styled.SettingsWindow>
                    <MediaQuery maxWidth={649}>
                        <styled.TabContainer>
                            <div>
                                <styled.Tab>
                                    <h2>Profile</h2>
                                    <img
                                        src={tab1}
                                        className="up-down"
                                        onClick={() => this.setState({ tab1: tab1 === down ? up : down })}
                                    />
                                </styled.Tab>
                                <div className="content" style={{ display: tab1 === up ? 'flex' : 'none' }}>
                                    <div>Profile</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <styled.Tab>
                                    <h2>Theme</h2>
                                    <img
                                        src={tab2}
                                        className="up-down"
                                        onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                    />
                                </styled.Tab>
                                <div className="content" style={{ display: tab2 === up ? 'flex' : 'none' }}>
                                    <div>Theme</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                            <div>
                                <styled.Tab>
                                    <h2>Subscribes </h2>
                                    <img
                                        src={tab3}
                                        className="up-down"
                                        onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                    />
                                </styled.Tab>
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
                                <styled.Tab>
                                    <h2>Followers</h2>
                                    <img
                                        src={tab4}
                                        className="up-down"
                                        onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                    />
                                </styled.Tab>
                                <div className="content" style={{ display: tab4 === up ? 'flex' : 'none' }}>
                                    <div>Followers</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                    <div>Usentame</div>
                                </div>
                            </div>
                        </styled.TabContainer>
                    </MediaQuery>
                    <MediaQuery minWidth={650}>
                        <styled.SettingsWindowForComp>
                            <styled.TabContainerForComp>
                                <label>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={this.showProfile}
                                    />
                                    Profile
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={this.showTheme}
                                    />
                                    Theme
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={this.showSubscribes}
                                    />
                                    Subscribes
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={this.showFollowers}
                                    />
                                    Followers
                                </label>
                            </styled.TabContainerForComp>
                            <main>
                                <Profile profileVisible={this.state.profileVisible} />
                                <Theme themeVisible={this.state.themeVisible} />
                                <Subscribes subscribesVisible={this.state.subscribesVisible} />
                                <FollowUser followersVisible={this.state.followersVisible}/>
                            </main>
                        </styled.SettingsWindowForComp>
                    </MediaQuery>
                </styled.SettingsWindow>
            </div>
        );
    }
}

export default Settings;
