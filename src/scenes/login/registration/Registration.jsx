/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from '../styled/Registration.styled';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            // repeatPassword: '',
            username: '',
        };
    }

    onChangeEmail = e => this.setState({ email: e.target.value });

    onChangeName = e => this.setState({ name: e.target.value });

    onChangePassword1 = e => this.setState({ password: e.target.value });

    onChangeUserName = e => this.setState({ username: e.target.value });

    // onChangePassword2 = (e) => this.setState({ repeatPassword: e.target.value });

    render() {
        const {
            actions, email, name, password, username,
        } = this.props;

        return (
            <styled.RegistrationStyled>
                <styled.RegistrationNavigationForm>

                    <styled.RegistrationForm action="" method="post">
                        <styled.RegistrationTitle>Registration</styled.RegistrationTitle>
                        <styled.EnterRegistrationInform>
                            <styled.RegistrationInput
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onChange={this.onChangeEmail}
                                required
                            />
                        </styled.EnterRegistrationInform>
                        <styled.EnterRegistrationInform>
                            <styled.RegistrationInput
                                type="text"
                                name="loginEx"
                                placeholder="Enter your name"
                                onChange={this.onChangeName}
                                required
                            />
                        </styled.EnterRegistrationInform>
                        <styled.EnterRegistrationInform>
                            <styled.RegistrationInput
                                type="text"
                                name="loginEx"
                                placeholder="Enter your username"
                                required
                                onChange={this.onChangeUserName}
                            />
                        </styled.EnterRegistrationInform>
                        <styled.EnterRegistrationInform>
                            <styled.RegistrationInput
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                onChange={this.onChangePassword1}
                                required
                            />
                        </styled.EnterRegistrationInform>
                        <styled.EnterRegistrationInform>
                            <styled.RegistrationInput
                                type="password"
                                name="passEx"
                                placeholder="Repeat password"
                                onChange={this.onChangePassword2}
                                required
                            />
                        </styled.EnterRegistrationInform>
                        <styled.RegistrationParagraph
                            onClick={() => actions.registration({
                                email, name, password, username,
                            })}
                        >GO
                        </styled.RegistrationParagraph>
                    </styled.RegistrationForm>
                    <styled.RegistrationHref>
                        <Link to="/auth">
                            <styled.NavigationButton type="button">Return to the login page</styled.NavigationButton>
                        </Link>
                    </styled.RegistrationHref>
                </styled.RegistrationNavigationForm>
            </styled.RegistrationStyled>
        );
    }
}

export default Registration;
