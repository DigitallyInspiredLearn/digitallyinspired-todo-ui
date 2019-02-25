import React, { Component } from 'react';
import './css/headerStyle.css';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import logo from '../../image/logo_di.svg';
import Settings from './settings/Settings';
import './settings/css/style.css';
import list from '../../image/list-menu.svg';
import * as styled from './Component.styles';
import theme from '../../config/theme';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            img: list,
        };
    }

    toggleSettings = () => {
        const { visible } = this.state;
        this.setState({ visible: !visible });
    }

    render() {
        const { visible, img } = this.state;
        const { children } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <styled.Container>
                    <styled.App>
                        <styled.Header>
                            <styled.Logo src={logo} className="logo" alt="logo" />
                            <b>To</b>
                            <p id="line" />
                            <b>do</b>
                            <img
                                src={img}
                                className="list"
                                alt="list"
                                onClick={this.toggleSettings}
                            />
                        </styled.Header>
                        <Settings visible={visible} toggleSettings={this.toggleSettings} />
                        { children }
                    </styled.App>
                </styled.Container>
            </ThemeProvider>
        );
    }
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container;
