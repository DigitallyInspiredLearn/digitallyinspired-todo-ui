import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import todo from './todo.png';

function AuthorizationPage() {
    return (
        <div className="container" style={{ alignContent: 'start' }}>
            <div className="container-fluid">
                <div className="description">
                    <h1>Cool site to control your plans</h1>
                    <p>...</p>
                </div>

                <div className="right">
                    <nav>
                        <form action="" method="post">
                            <h2>Sign in</h2>
                            <div className="enterEmail enterInf">
                                <input
                                    className="form-control"
                                    type="email"
                                    name="loginEx"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="enterPass">
                                <input
                                    type="password"
                                    name="passEx"
                                    placeholder="Enter your password"
                                    className="form-control"
                                    required
                                />
                            </div>
                            <Link to="/lists">
                                <button
                                    type="submit"
                                    name="enterEx"
                                    className="btn btn-success form-control enter"
                                    style={{ width: '95%' }}
                                >ENTER
                                </button>
                            </Link>
                        </form>

                        <img src={todo} alt="todo" className="todo" />
                        <div className="href">
                            <button type="button" className="forgetPass">Forgot your password?</button>
                            <button type="button" className="registration">Check in</button>
                        </div>
                        <div className="bg" />
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default AuthorizationPage;
