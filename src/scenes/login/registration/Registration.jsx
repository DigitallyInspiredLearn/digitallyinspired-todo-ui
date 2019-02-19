/* eslint-disable react/prop-types,react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styleReg.css';
import '../style.css';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            // repeetPassword: '',
            username: '',
        };
    }

    onChangeEmail = e => this.setState({ email: e.target.value });

    onChangeName = e => this.setState({ name: e.target.value });

    onChangePassword1 = e => this.setState({ password: e.target.value });

    onChangeUserName = e => this.setState({ username: e.target.value });

    // onChangePassword2 = (e) => this.setState({ repeetPassword: e.target.value });

    render() {
        return (
            <div id="regDiv">
                <nav className="navForm">
                    <form action="" method="post">
                        <h2>Registration</h2>
                        <div className="enterEmail enterInf">
                            <input
                                className="form-control"
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onChange={this.onChangeEmail}
                                required
                            />
                        </div>
                        <div className="enterEmail enterInf">
                            <input
                                className="form-control"
                                type="text"
                                name="loginEx"
                                placeholder="Enter your name"
                                onChange={this.onChangeName}
                                required
                            />
                        </div>
                        <div className="enterEmail enterInf">
                            <input
                                className="form-control"
                                type="text"
                                name="loginEx"
                                placeholder="Enter your username"
                                required
                                onChange={this.onChangeUserName}
                            />
                        </div>
                        <div className="enterPass enterInf">
                            <input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                className="form-control"
                                onChange={this.onChangePassword1}
                                required
                            />
                        </div>
                        <div className="enterPass enterInf">
                            <input
                                type="password"
                                name="passEx"
                                placeholder="Repeat password"
                                className="form-control"
                                onChange={this.onChangePassword2}
                                required
                            />
                        </div>
                        <p
                            className="btn btn-success form-control enter"
                            style={{ width: '95%' }}
                            onClick={() => this.props.actions.registration({
                                email: this.state.email,
                                name: this.state.name,
                                password: this.state.password,
                                username: this.state.username,
                            })
                            }
                        >GO
                        </p>
                    </form>
                    <div className="href">
                        <Link to="/auth">
                            <button type="button" className="navBtn">Return to the login page</button>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Registration;

// manageDisabled = () => (
//     !this.state.email.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$')
//     || !this.state.name.match('^[a-zA-Z0-9]{2,20}$')
//     || !this.state.password.match('^[a-zA-Z0-9]{6,30}$')
//     || this.state.password !== this.state.repeetPassword
//     || !this.state.username.match('^[a-zA-Z0-9]{2,20}$')
//         ? this.setState({ disabled: 'disabled' })
//         : this.setState({ disabled: null })
// );

//     const { registration } = this.props.actions;
//     const {
//         email, name, password, username,
//     } = this.state;
//     registration(
//         //???
//     );
