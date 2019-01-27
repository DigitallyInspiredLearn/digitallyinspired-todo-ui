import React, {Component} from 'react';
import logo from "../image/logo_di.svg";
import '../header/Header.css'

export class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="logo" alt="DI logo" draggable="false"/>
                <h1 className="app-title">To</h1>
                <span className="app-title-line"></span>
                <h1 className="app-title">do</h1>
            </header>
        );
    }
}
