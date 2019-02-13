import React from 'react';
import './style.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authorization from './authorization/AutorizationCortainer';
import Registration from "./registration/RegistrationContainer";

function MainPageLogin() {
    return (
        <div className="container" style={{ alignContent: 'start' }}>
            <div className="container-fluid">
                <div className="description">
                    <h1>Cool site to control your plans</h1>
                    <p>...</p>
                </div>
                <Switch>
                    <Route path="/main/aut" component={Authorization} />
                    <Route path="/main/reg" component={Registration} />
                    <Redirect to="/main/reg" />
                </Switch>
            </div>
        </div>
    );
}

export default MainPageLogin;