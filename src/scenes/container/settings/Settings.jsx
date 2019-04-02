/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Profile from './profile/ProfileContainer';
import Theme from './theme/ThemeContainer';
import Subscribes from './subscribes/SubscribesContainer';
import FollowUser from './followUser/FollowUserContainer';
import * as styled from './Settings.styles';


class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'profile',
        };
    }

    componentWillMount = () => {
        const { actions: { fetchCurrentUser } } = this.props;
        fetchCurrentUser();
    };

    handleSelectTab = (value) => {
        this.setState({
            selectedTab: value,
        });
    };

    handlerOnClick = (e) => {
        e.target.blur();
    };

    closeSetting = () => {
        this.props.visible = false;
    };

    render() {
        const { visible, toggleSettings, currentUser } = this.props;
        const { selectedTab } = this.state;
        return (
            <styled.Background style={{ display: visible ? 'flex' : 'none' }}>
                <styled.Window>
                    <styled.CloseWindow onClick={() => toggleSettings()}>
                                &times;
                    </styled.CloseWindow>
                    <styled.Main>
                        <styled.TabContainer>
                            <styled.Tab selected={selectedTab === 'profile'}>
                                <input
                                    type="radio"
                                    style={{ visibility: 'hidden' }}
                                    onClick={() => this.handleSelectTab('profile')}
                                />
                                    Profile
                            </styled.Tab>
                            <styled.Tab selected={selectedTab === 'theme'}>
                                <input
                                    type="radio"
                                    style={{ visibility: 'hidden' }}
                                    onClick={() => this.handleSelectTab('theme')}
                                />
                                    Theme
                            </styled.Tab>
                            <styled.Tab selected={selectedTab === 'subscribes'}>
                                <input
                                    type="radio"
                                    style={{ visibility: 'hidden' }}
                                    onClick={() => this.handleSelectTab('subscribes')}
                                />
                                    Subscribers
                            </styled.Tab>
                            <styled.Tab selected={selectedTab === 'followers'}>
                                <input
                                    type="radio"
                                    style={{ visibility: 'hidden' }}
                                    onClick={() => this.handleSelectTab('followers')}
                                />
                                    Follow
                            </styled.Tab>
                        </styled.TabContainer>
                        <styled.Content>
                            {selectedTab === 'profile'
                                        && currentUser && <Profile toggleSettings={toggleSettings} />}
                            {selectedTab === 'theme' && <Theme />}
                            {selectedTab === 'subscribes' && <Subscribes />}
                            {selectedTab === 'followers' && <FollowUser />}
                        </styled.Content>
                    </styled.Main>
                </styled.Window>
            </styled.Background>
        );
    }
}

export default Settings;
