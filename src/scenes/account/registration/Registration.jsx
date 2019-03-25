/* eslint-disable react/prop-types,react/no-unused-state */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from '../Account.styled';
import Button from '../../../components/button/Button';

const validatedFields = ['email', 'username', 'password', 'name', 'repeatPassword'];

const validateEmail = email => (email.length === 0 || !email.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$') ? 'Invalid' : 'Ok');

const validateUsername = username => (username.length === 0 || username.length < 6 ? 'Invalid' : 'Ok');

const validatePassword = password => (password.length === 0 || password.length < 6 ? 'Invalid' : 'Ok');

const validateRepeatPassword = repeatPassword => (repeatPassword.length === 0 ? 'Invalid' : 'Ok');

const validateName = name => (name.length === 0 ? 'Invalid' : 'Ok');


const registryValidator = {
    email: validateEmail,
    username: validateUsername,
    password: validatePassword,
    name: validateName,
    repeatPassword: validateRepeatPassword,
};

const validation = (object, keys, validator) => {
    let errors = {};
    keys.forEach((key) => {
        errors = { ...errors, [key]: validator[key](object[key]) };
    });
    return errors;
};

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            repeatPassword: '',
            username: '',
            errors: {},
        };
    }

    onChangeEmail = (e) => {
        this.setState({ email: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validatedFields, registryValidator) });
        });
    };

    onChangeName = (e) => {
        this.setState({ name: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validatedFields, registryValidator) });
        });
    };

    onChangePassword1 = (e) => {
        this.setState({ password: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validatedFields, registryValidator) });
        });
    };

    onChangeUserName = (e) => {
        this.setState({ username: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validatedFields, registryValidator) });
        });
    };


    onChangePassword2 = (e) => {
        this.setState({ repeatPassword: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validatedFields, registryValidator) });
        });
    };

    render() {
        const { actions } = this.props;
        const {
            email, name, password, username,
        } = this.state;

        return (
            <styled.Content>
                <styled.NavigationForm>
                    <styled.Form action="" method="post">
                        <styled.Title>Registration</styled.Title>
                        <styled.EnterInformation>
                            <styled.Input
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onBlur={this.onChangeEmail}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="text"
                                name="loginEx"
                                placeholder="Enter your name"
                                onBlur={this.onChangeName}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="text"
                                name="loginEx"
                                placeholder="Enter your username"
                                onBlur={this.onChangeUserName}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                onBlur={this.onChangePassword1}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Repeat password"
                                onBlur={this.onChangePassword2}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.SuccessButton
                            onClick={() => {
                                if (this.state.errors.email !== 'Invalid'
                                    && this.state.errors.name !== 'Invalid'
                                    && this.state.errors.username !== 'Invalid'
                                    && this.state.errors.password !== 'Invalid'
                                    && this.state.password === this.state.repeatPassword
                                ) {
                                    actions.registration({
                                        email, name, password, username,
                                    });
                                } else {
                                    const error = `Email: ${this.state.errors.email
                                    }\nName: ${this.state.errors.name
                                    }\nUsername: ${this.state.errors.username
                                    }\nPassword: ${this.state.errors.password
                                    }\nRepeat password`;
                                    alert(
                                        error,
                                    );
                                }
                            }
                            }
                        >GO
                        </styled.SuccessButton>
                    </styled.Form>
                    <styled.HrefButton>
                        <Link to="/auth">
                            <Button
                                value="Return to the login page"
                                style={{
                                    color: 'black',
                                    width: '100%',
                                    padding: '8px',
                                    fontWeight: 'normal',
                                    height: 'auto',
                                    borderRadius: '8px',
                                }}
                            />
                        </Link>
                    </styled.HrefButton>
                </styled.NavigationForm>
            </styled.Content>

        );
    }
}

export default Registration;
