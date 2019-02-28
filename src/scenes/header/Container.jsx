import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { bindActionCreators } from 'redux';
import logo from '../../image/logo_di.svg';
import logout from '../../image/logout.svg';
import Settings from './settings/Settings';
import list from '../../image/list-menu.svg';
import * as styled from './Component.styles';
import { actions } from '../login/authorization/duck';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    toggleSettings = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    }

    render() {
        console.log(this.props);
        const { visible } = this.state;
        const { children, data, actions } = this.props;
        return (
            <ThemeProvider theme={data}>
                <styled.Container>
                    <styled.Header>
                        <styled.Logo src={logo} alt="logo" />
                        <b>To</b>
                        <styled.Line />
                        <b>do</b>
                        <styled.Burger
                            src={list}
                            alt="list"
                            onClick={this.toggleSettings}
                        />
                        <styled.Logout
                            src={logout}
                            alt="logout"
                            onClick={actions.logout}
                        />
                    </styled.Header>
                    <Settings visible={visible} toggleSettings={this.toggleSettings} />
                    { children }
                </styled.Container>
            </ThemeProvider>
        );
    }
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

const mapStateToProps = state => ({
    data: state.theme.data,
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({
        logout: actions.logout,
    }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
