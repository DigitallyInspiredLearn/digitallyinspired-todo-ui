import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Container from './scenes/container/Container';
import VisibleTodoList from './scenes/dashboard/DashboardContainer';
import Authorization from './scenes/account/authorization/AutorizationCortainer';
import Registration from './scenes/account/registration/RegistrationContainer';
import OneList from './scenes/list/OneListContainer';
import PageError404 from './scenes/errors/pageError404';
import PageError500 from './scenes/errors/pageError500';
import Basket from './scenes/basket/Basket';

const App = () => (

    <Container>
        <Switch>
            <Route path="/lists/basket" component={Basket} />
            <Route path="/lists/:id" component={OneList} />
            <Route path="/lists" component={VisibleTodoList} />
            <Route path="/auth" component={Authorization} />
            <Route path="/reg" component={Registration} />
            <Route path="/error404" component={PageError404} />
            <Route path="/error500" component={PageError500} />
            <Redirect to="/auth" />
        </Switch>
    </Container>
);

export default App;
