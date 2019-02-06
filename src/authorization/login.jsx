import React, {Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom'

export class Authorization extends Component {
    render() {
        return (
            <div className='fonAuth'>
                <div className='Authorization'>
                    <h4>Добро пожаловать!</h4>
                    <label>Email</label>
                    <a className='logPas'><input
                        type='text'
                        placeholder='Enter your login'
                        className='login'
                        style={{fontSize: 20}}
                    />
                    </a>
                    <label>Password</label>
                    <a className='logPas'><input
                        type='text'
                        placeholder='Enter your password'
                        className='login'
                        style={{fontSize: 20}}
                    />
                    </a>
                    <Link to='/list'>
                        <button className='signIn' style={{alignSelf: 'center'}}>Войти</button>
                    </Link>
                    <a className='logPas' style={{alignSelf: 'center'}}>Забыли пароль?</a>
                </div>
            </div>

        )
    }
}