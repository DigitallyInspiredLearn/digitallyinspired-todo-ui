import React, {Component} from 'react';
import {Header} from "../home/HomeComponents/header/Header";
import './style.css'
import todo from './todo.png'

export class AvtorizationPage extends Component {
    render() {
        return (
            <div className="container" style={{alignContent : "start"}}>
                <Header/>
                <div className="container-fluid">
                    <div className="description">
                        <h3>...</h3>
                        <p></p>
                    </div>

                    <div className='right'>
                        <nav>
                            <form action="" method="post">
                                <h2>Вход на сайт</h2>
                                <div className='enterEmail'>
                                    <input type="email" name="loginEx" placeholder="Enter your email"
                                           className="form-control"
                                           required/>
                                </div>

                                <div className='enterPass'>
                                    <input type="password" name="passEx" placeholder="Enter your password"
                                           className="form-control" required/>
                                </div>

                                <button type="submit" name="enterEx"
                                        className="btn btn-success form-control">ВОЙТИ
                                </button>

                            </form>

                            <img src={todo} alt='todo' className="todo"/>
                            <div className="href">
                                <button type='button' className='forgetPass'>Забыли пароль?</button>
                                <button type='button'
                                        className="registration">Регистрация
                                </button>
                            </div>
                            <div className="bg"/>
                        </nav>
                    </div>

                </div>
            </div>

        )
    }
}


// ReactDOM.render(
//     <AvtorizationPage/>,
//     document.getElementsByClassName('container-fluid')
// );
