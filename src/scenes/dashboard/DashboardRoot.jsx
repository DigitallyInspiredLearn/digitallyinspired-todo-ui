import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '../header/Container';
import VisibleTodoList from './TodoListContainer';
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
