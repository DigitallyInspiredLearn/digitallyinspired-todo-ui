import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import logo from '../../image/logo_di.svg';
import Settings from './settings/Settings';
import list from '../../image/list-menu.svg';
import * as styled from './Component.styles';

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
        const { visible } = this.state;
        const { children, data } = this.props;
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

export default connect(mapStateToProps)(Container);
