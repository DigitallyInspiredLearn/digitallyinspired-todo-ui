/* eslint-disable react/prop-types */
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
            selectedTab: 'profile',

        };
    }


    handleSelectTab = (value) => {
        this.setState({
            selectedTab: value,
        });
    }

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
                                    {/*<Profile />*/}
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
                                    <FollowUser />
                                </div>
                            </div>
                        </styled.TabContainer>
                    </MediaQuery>
                    <MediaQuery minWidth={650}>
                        <styled.SettingsWindowForComp>
                            <styled.TabContainerForComp>
                                <styled.TabLabel selected={this.state.selectedTab === 'profile'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('profile')}
                                    />
                                    Profile
                                </styled.TabLabel>
                                <styled.TabLabel selected={this.state.selectedTab === 'theme'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('theme')}
                                    />
                                    Theme
                                </styled.TabLabel>
                                <styled.TabLabel selected={this.state.selectedTab === 'subscribes'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('subscribes')}
                                    />
                                    Subscribes
                                </styled.TabLabel>
                                <styled.TabLabel selected={this.state.selectedTab === 'followers'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('followers')}
                                    />
                                    Followers
                                </styled.TabLabel>
                            </styled.TabContainerForComp>
                            <main>
                                {this.state.selectedTab === 'profile' && <Profile />}
                                {this.state.selectedTab === 'theme' && <Theme />}
                                {this.state.selectedTab === 'subscribes' && <Subscribes />}
                                {this.state.selectedTab === 'followers' && <FollowUser />}
                            </main>
                        </styled.SettingsWindowForComp>
                    </MediaQuery>
                </styled.SettingsWindow>
            </div>
        );
    }
}

export default Settings;
