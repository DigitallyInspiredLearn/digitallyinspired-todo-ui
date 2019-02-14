import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './scenes/header/Header';
import VisibleTodoList from './scenes/dashboard/TodoListContainer';
import MainPageLogin from './scenes/login/MainPageLogin';
import OneList from './scenes/list/OneListContainer';

const App = () => (
    <div className="App">
        <Header />
        <Switch>
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/main" component={MainPageLogin} />
            <Route path="/list/:id" component={OneList} />
            <Redirect to="/main" />
        </Switch>
    </div>
);

export default App;
