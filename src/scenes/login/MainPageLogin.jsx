import React from 'react';
import './style.css';
import Authorization from '../login/authorization/AutorizationCortainer';
function MainPageLogin() {
    return (
        <div className="container" style={{ alignContent: 'start' }}>
            <div className="container-fluid">
                <div className="description">
                    <h1>Cool site to control your plans</h1>
                    <p>...</p>
                </div>
                <Authorization/>
            </div>
        </div>
    );
}

export default MainPageLogin;
