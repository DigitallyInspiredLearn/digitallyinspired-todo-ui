import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import todo from '../todo.png';

class Authorization extends Component {
    constructor(props){
        super(props);
        this.state={
            password: '',
            login: '',
        }
    }

    onChangePassword = (e) => this.setState({ password: e.target.value });

    onChangeLogin = (e) => this.setState({ login: e.target.value });

    render() {
        return (
            <div className="right">
                <nav className='navForm'>
                    <form action="" method="post">
                        <h2>Sign in</h2>
                        <div className="enterEmail enterInf">
                            <input
                                className="form-control"
                                type="email"
                                name="loginEx"
                                placeholder="Enter your email"
                                onChange={this.onChangePassword}
                                required
                            />
                        </div>
                        <div className="enterPass">
                            <input
                                type="password"
                                name="passEx"
                                placeholder="Enter your password"
                                className="form-control"
                                onChange={this.onChangeLogin}
                                required
                            />
                        </div>
                        <p
                            // type="submit"
                            // name="enterEx"
                            className="btn btn-success form-control enter"
                            style={{width: '95%'}}
                            onClick={() => this.props.actions.authorization({
                                password: this.state.password,
                                usernameOrEmail: this.state.login,
                            })}
                        >ENTER
                        </p>
                    </form>
                    <img src={todo} alt="todo" className="todo" />
                    <div className="href">
                        <button type="button" className="forgetPass navBtn">Forgot your password?</button>
                        <Link to="/main/reg">
                            <button type="button" className="registration navBtn">Registration</button>
                        </Link>
                    </div>
                    <div className="bg" />
                </nav>
            </div>
        );
    }
}

export default Authorization;