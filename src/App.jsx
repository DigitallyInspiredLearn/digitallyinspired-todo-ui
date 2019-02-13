import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './scenes/header/Header';
import VisibleTodoList from './scenes/dashboard/TodoListContainer';
import MainPageLogin from './scenes/login/MainPageLogin';
import Registration from './scenes/login/registration/RegistrationContainer';
import OneListContainer from './scenes/list/OneListContainer';

const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/main" component={MainPageLogin} />
            <Route path="/registration" component={Registration} />
            <Route path="/list/:id" component={OneListContainer} />
            <Redirect to="/main" />
        </Switch>
    </div>
);

export default App;
