/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from '../LogIn.styled';
import Button from '../../../components/button/Button';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            username: '',
        };
    }

    onChangeEmail = e => this.setState({ email: e.target.value });

    onChangeName = e => this.setState({ name: e.target.value });

    onChangePassword1 = e => this.setState({ password: e.target.value });

    onChangeUserName = e => this.setState({ username: e.target.value });

    onChangePassword2 = e => this.setState({ repeatPassword: e.target.value });

    render() {
        const { actions } = this.props;
        const { email, name, password, username } = this.state;

        return (
            <styled.Styled>
                <styled.NavigationForm>
                    <styled.Form action="" method="post">
                        <styled.Title>Registration</styled.Title>
                        <styled.EnterInformation>
                            <styled.Input
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onChange={this.onChangeEmail}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="text"
                                name="loginEx"
                                placeholder="Enter your name"
                                onChange={this.onChangeName}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="text"
                                name="loginEx"
                                placeholder="Enter your username"
                                onChange={this.onChangeUserName}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                onChange={this.onChangePassword1}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Repeat password"
                                onChange={this.onChangePassword2}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.SuccessButton
                            onClick={() => actions.registration({
                                email, name, password, username,
                            })}
                        >GO
                        </styled.SuccessButton>
                    </styled.Form>
                    <styled.HrefButton>
                        <Link to="/auth">
                            <Button
                                value="Return to the login page"
                                style={{
                                    color: 'black', marginTop: '0', width: '100%', padding: '5px', fontWeight: 'normal',
                                }}
                            />
                        </Link>
                    </styled.HrefButton>
                </styled.NavigationForm>
            </styled.Styled>
        );
    }
}

export default Registration;
