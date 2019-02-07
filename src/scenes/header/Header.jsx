import React, { Component } from 'react';
import logo from '../../img/DI.png';
import './header.css';

export class Header extends Component {
    render(){
        return (
            <div id="block-header">
              <div><img src={logo} width="80%" height="35px" alt="logo"/></div>
              <div className="text-Todo">To</div>
              <div id="hr"></div>
              <div className="text-Todo">do</div>
            </div>
        );
    }
}