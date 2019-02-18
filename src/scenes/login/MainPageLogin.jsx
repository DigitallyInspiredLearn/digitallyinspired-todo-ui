import React from 'react';
import './style.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authorization from './authorization/AutorizationCortainer';
import Registration from './registration/RegistrationContainer';

function MainPageLogin() {
    return (
            <div className="container" style={{ alignContent: 'center' }}>
                    <Switch>
                        <Route path="/main/aut" component={Authorization} />
                        <Route path="/main/reg" component={Registration} />
                        <Redirect to="/main/aut" />
                    </Switch>
            </div>
    );

}
export default MainPageLogin;
