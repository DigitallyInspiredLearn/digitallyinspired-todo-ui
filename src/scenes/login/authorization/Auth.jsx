/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from '../LogIn.styled';

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
        };
    }

    onChangeLogin = e => this.setState({ login: e.target.value });

    onChangePassword = e => this.setState({ password: e.target.value });

    render() {
        const { actions } = this.props;
        const { password, login } = this.state;
        return (
            <styled.Styled>
                <styled.NavigationForm>
                    <styled.Form action="" method="post">
                        <styled.Title>Sign in</styled.Title>
                        <styled.EnterInformation>
                            <styled.Input
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onChange={this.onChangeLogin}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                onChange={this.onChangePassword}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.SuccessButton
                            onClick={() => actions.authorization({ password, usernameOrEmail: login })}
                        >ENTER
                        </styled.SuccessButton>
                    </styled.Form>
                    <styled.HrefButton>
                        <Link to="/reg">
                            <styled.NavigationButton>Registration</styled.NavigationButton>
                        </Link>
                    </styled.HrefButton>
                </styled.NavigationForm>
            </styled.Styled>
        );
    }
}

export default Authorization;
