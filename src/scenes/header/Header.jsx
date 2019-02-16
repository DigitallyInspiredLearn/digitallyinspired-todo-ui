import React from 'react';
import './css/headerStyle.css';
import logo from '../../image/logo_di.svg';

const Header = () => (
    <header>
        <img src={logo} className="logo" alt="logo" />
        <b>To</b>
        <p id="line" />
        <b>do</b>
    </header>
);

export default Header;
