import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import todo from '../todo.png';
import './styleReg.css';
import '../style.css';

class Registration extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            name: '',
            password1: '',
            password2: '',
            username: '',
            disabled: 'disabled'
        };
    }

    manageDisabled = () => (
        !this.state.email.match('^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+\.[a-z]{2,6}$')||
        !this.state.name.match('^[a-zA-Z0-9]{2,20}$')||
        !this.state.password1.match('^[a-zA-Z0-9]{6,30}$')||
        this.state.password1!==this.state.password2||
        !this.state.username.match('^[a-zA-Z0-9]{2,20}$')
            ? this.setState({ disabled: 'disabled' })
            :this.setState({ disabled: null })
    );
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
        this.manageDisabled();
    };
    onChangeName = (e) => {
        this.setState({ name: e.target.value });
        this.manageDisabled();
    };
    onChangePassword1 = (e) => {
        this.setState({ password1: e.target.value });
        this.manageDisabled();
    };
    onChangePassword2 = (e) => {
        this.setState({ password2: e.target.value });
        this.manageDisabled();
    };
    onChangeUserName = (e) => {
        this.setState({ username: e.target.value });
        this.manageDisabled();
    };


    render() {

        return (
            <div id="regDiv">
                {/*<div className="background L" />*/}
                <nav className='navForm'>
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
                                onChange={ this.onChangeName }
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
                                onChange={ this.onChangeUserName }
                            />
                        </div>
                        <div className="enterPass enterInf">
                            <input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                className="form-control"
                                onChange={ this.onChangePassword1 }
                                required
                            />
                        </div>
                        <div className="enterPass enterInf">
                            <input
                                type="password"
                                name="passEx"
                                placeholder="Repeat password"
                                className="form-control"
                                onChange={ this.onChangePassword2 }
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            name="enterEx"
                            className="btn btn-success form-control enter"
                            style={{width: '95%'}}
                            onClick={() => this.props.actions.registration({
                                email: this.state.email,
                                name: this.state.name,
                                password: this.state.password1,
                                username: this.state.username
                            })}
                            disabled={this.state.disabled}
                        >GO
                        </button>
                    </form>
                    <img src={todo} alt="todo" className="todo" />
                    <div className="href">
                        <button type="button" className="forgetPass navBtn">Forgot your password?</button>
                        <Link to="/main/aut">
                            <button type="button" className="navBtn" >Return to the login page</button>
                        </Link>
                    </div>
                </nav>
                {/*<div className="background R" />*/}
                <div className="bg" />
            </div>
        );
    }
}

export default Registration;

