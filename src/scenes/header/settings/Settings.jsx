/* eslint-disable react/prop-types */
import React, { Component } from 'react';
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

    // componentWillMount = ({ actions } = this.props) => actions.fetchCurrentUser();

    // componentDidMount = () => this.props.actions.fetchCurrentUser();

    handleSelectTab = (value) => {
        this.setState({
            selectedTab: value,
        });
    }

    closeSetting = () => {
        this.props.visible = false;
    }

    render() {
        const { visible, toggleSettings } = this.props;
        const {
            tab1,
            tab2,
            tab3,
            tab4,
            selectedTab,
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
                                    <styled.MobileToggle
                                        src={tab1}
                                        onClick={() => this.setState({ tab1: tab1 === down ? up : down })}
                                        alt="profile"
                                    />
                                </styled.Tab>
                                <styled.MobileContent style={{ display: tab1 === up ? 'flex' : 'none' }}>
                                    <Profile />
                                </styled.MobileContent>
                            </div>
                            <div>
                                <styled.Tab>
                                    <h2>Theme</h2>
                                    <styled.MobileToggle
                                        src={tab2}
                                        onClick={() => this.setState({ tab2: tab2 === down ? up : down })}
                                        alt="Theme"
                                    />
                                </styled.Tab>
                                <styled.MobileContent style={{ display: tab2 === up ? 'flex' : 'none' }}>
                                    <div>Theme</div>
                                </styled.MobileContent>
                            </div>
                            <div>
                                <styled.Tab>
                                    <h2>Subscribes </h2>
                                    <styled.MobileToggle
                                        src={tab3}
                                        onClick={() => this.setState({ tab3: tab3 === down ? up : down })}
                                        alt="Subscribes"
                                    />
                                </styled.Tab>
                                <styled.MobileContent style={{ display: tab3 === up ? 'flex' : 'none' }}>
                                    <div>Subscribes</div>
                                </styled.MobileContent>
                            </div>
                            <div>
                                <styled.Tab>
                                    <h2>Followers</h2>
                                    <styled.MobileToggle
                                        src={tab4}
                                        onClick={() => this.setState({ tab4: tab4 === down ? up : down })}
                                        alt="Followers"
                                    />
                                </styled.Tab>
                                <styled.MobileContent style={{ display: tab4 === up ? 'flex' : 'none' }}>
                                    <FollowUser />
                                </styled.MobileContent>
                            </div>
                        </styled.TabContainer>
                    </MediaQuery>
                    <MediaQuery minWidth={650}>
                        <styled.SettingsWindowForComp>
                            <styled.CloseWindow
                                onClick={() => toggleSettings()}
                            >
                                    X
                            </styled.CloseWindow>
                            <styled.TabContainerForComp>
                                <styled.TabLabel selected={selectedTab === 'profile'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('profile')}
                                    />
                                    Profile
                                </styled.TabLabel>
                                <styled.TabLabel selected={selectedTab === 'theme'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('theme')}
                                    />
                                    Theme
                                </styled.TabLabel>
                                <styled.TabLabel selected={selectedTab === 'subscribes'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('subscribes')}
                                    />
                                    Subscribes
                                </styled.TabLabel>
                                <styled.TabLabel selected={selectedTab === 'followers'}>
                                    <input
                                        type="radio"
                                        style={{ visibility: 'hidden' }}
                                        onClick={() => this.handleSelectTab('followers')}
                                    />
                                    Followers
                                </styled.TabLabel>
                            </styled.TabContainerForComp>
                            <main>
                                {selectedTab === 'profile' && <Profile toggleSettings={this.props.toggleSettings} />}
                                {selectedTab === 'theme' && <Theme />}
                                {selectedTab === 'subscribes' && <Subscribes />}
                                {selectedTab === 'followers' && <FollowUser />}
                            </main>
                        </styled.SettingsWindowForComp>
                    </MediaQuery>
                </styled.SettingsWindow>
            </div>
        );
    }
}

export default Settings;
