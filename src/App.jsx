import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './scenes/header/Container';
import VisibleTodoList from './scenes/dashboard/DashboardContainer';
import Authorization from './scenes/login/authorization/AutorizationCortainer';
import Registration from './scenes/login/registration/RegistrationContainer';
import OneList from './scenes/list/OneListContainer';
import PageError404 from './scenes/errors/pageError404';
import PageError500 from './scenes/errors/pageError500';

const App = () => (

    <Container>
        <Switch>
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/auth" component={Authorization} />
            <Route path="/reg" component={Registration} />
            <Route path="/list/:id" component={OneList} />
            <Route path="/error404" component={PageError404} />
            <Route path="/error500" component={PageError500} />
            <Redirect to="/auth" />
        </Switch>
    </Container>

);

export default App;
