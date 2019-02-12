import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './scenes/header/Header';
import VisibleTodoList from './scenes/dashboard/TodoListContainer';

import AuthorizationPage from './scenes/authorization/Authorization';
import OneList from './scenes/list/OneList';

const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/aut" component={AuthorizationPage} />
            <Route path="/list/:id" component={OneList} />
            <Redirect to="/aut" />
        </Switch>
    </div>
);

export default App;
