import React from 'react';
import './css/headerStyle.css';
import PropTypes from 'prop-types';
import logo from '../../image/logo_di.svg';


const Header = ({ children }) => (
    <div className="App">
        <header>
            <img src={logo} className="logo" alt="logo" />
            <b>To</b>
            <p id="line" />
            <b>do</b>
        </header>
        {children}
    </div>
);
Header.propTypes = {
    children: PropTypes.node.isRequired,
};

// Header.defaultProps = {
//     children: undefined,
// };


export default Header;
