import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../container/Container';
import VisibleTodoList from './DashboardContainer';
import OneList from '../list/OneListContainer';

const DashboardRoot = () => (

    <Container>
        <Switch>
            <Route exact path="/" component={VisibleTodoList} />
            <Route path="/:id" component={OneList} />
        </Switch>
    </Container>

);

export default DashboardRoot;
