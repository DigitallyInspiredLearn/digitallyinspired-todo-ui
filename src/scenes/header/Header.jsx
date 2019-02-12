import React from 'react';
import './css/headerStyle.css';
import logo from './logo.png';

const Header = () => (
    <header>
        <img src={logo} className="logo" alt="logo" />
        <b>To</b>
        <p id="line" />
        <b>do</b>
    </header>
);

export default Header;
