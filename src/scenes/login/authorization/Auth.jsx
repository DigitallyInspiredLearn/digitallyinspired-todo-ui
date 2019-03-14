/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as styled from '../LogIn.styled';
import Button from '../../../components/button/Button';

const validateFields = ['login', 'password'];

const validateLogIn = login => login.length === 0 ? 'Invalid' : undefined;

const validatePassword = password => password === 0 ? 'Invalid' : undefined;

const authValidator = {
    login: validateLogIn,
    password: validatePassword,
};

const validation = (object, keys, validator) => {
    let errors = {};
    keys.forEach((key) => {
        errors = { ...errors, [key]: validator[key](object[key]) };
    });
    return errors;
};

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            login: '',
            errors: {},
        };
    }

    onChangeLogin = (e) => {
        this.setState({ login: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validateFields, authValidator) });
        });
    };

    onChangePassword = (e) => {
        this.setState({ password: e.target.value }, () => {
            this.setState({ errors: validation(this.state, validateFields, authValidator) });
        });
    };

    render() {
        console.log(this.state);
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
                                placeholder="Enter your email or username"
                                onBlur={this.onChangeLogin}
                                required
                            />
                        </styled.EnterInformation>
                        <styled.EnterInformation>
                            <styled.Input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                onBlur={this.onChangePassword}
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
                            <Button
                                value="Registration"
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

export default Authorization;
