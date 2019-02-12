import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch, Redirect,
} from 'react-router-dom';

import Home from './home/Home';

export default () => (
    <Router>
        <Switch>
            <Route path="/home" component={Home} />
            <Redirect to="/home" />
        </Switch>
    </Router>
);
