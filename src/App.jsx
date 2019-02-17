import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './scenes/header/Header';
import VisibleTodoList from './scenes/dashboard/TodoListContainer';
import Authorization from './scenes/login/authorization/AutorizationCortainer';
<<<<<<< HEAD
import Registration from './scenes/login/registration/RegistrationContainer';
=======
import Registration from './scenes/login/registration/Registration';
>>>>>>> b35abe32cd2de24c8428c35d7172655a2e585cd0
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
