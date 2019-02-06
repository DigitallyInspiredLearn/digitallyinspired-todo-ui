import React, { Component } from 'react';
import './auth.css'

export class Auth extends Component {
    render(){
        return (
            <div className="container">
                <div 
                    className="item1"
                    >
                    
                </div> 
                <div 
                    className="item2"
                    >
                    <p>Вход</p>
                    <div 
                        className="form"
                        >
                        <form 
                            className="login-form"
                            >
                            <input 
                                type="email" 
                                placeholder="Введите email" 
                                required
                            />

                            <br/>
                            <input 
                                type="password" 
                                placeholder="Введите пароль" 
                                required
                            />
                            <br/>
                            <button>Войти</button>
                        </form>
                    </div>
                </div>
                <div 
                    className="item3"
                    >
                    
                </div>
            </div>
        )
    }
}