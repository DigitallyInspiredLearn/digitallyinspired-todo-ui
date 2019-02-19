import React from 'react';
import './css/headerStyle.css';
import PropTypes from 'prop-types';
import logo from '../../image/logo_di.svg';


const Container = ({ children }) => (
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
Container.propTypes = {
    children: PropTypes.node.isRequired,
};

// Container.defaultProps = {
//     children: undefined,
// };


export default Container;
