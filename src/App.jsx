import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './scenes/header/Header';
import VisibleTodoList from './scenes/dashboard/TodoListContainer';
import Authorization from './scenes/login/authorization/AutorizationCortainer';
import Registration from './scenes/login/registration/Registration';
import OneList from './scenes/list/OneListContainer';

const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/auth" component={Authorization} />
            <Route path="/reg" component={Registration} />
            <Route path="/list/:id" component={OneList} />
            <Redirect to="/auth" />
        </Switch>
    </div>
);

export default App;
