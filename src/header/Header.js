import React, { Component } from 'react';
import './css/headerStyle.css';
import logo from './logo.png'

export class Header extends Component{
    render(){
        return(
            <header>
                <img src={logo} className="logo"/>
                <b>To</b>
                <p id="line"/>
                <b>do</b>
            </header>
        )
    }
}
