import React, {Component} from 'react';
import {Header} from "./header/Header";
import VisibleTodoList from './dashboard/TodoListContainer'

import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthorizationPage} from "./authorization/Authorization";
import OneList from "./oneList/OneList";

export class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>

                    <Switch>
                        <Route path='/lists' component={VisibleTodoList}/>
                        <Route path='/aut' component={AuthorizationPage}/>
                        <Route path='/list/:id' component={OneList}/>
                        <Redirect to='/aut'/>
                    </Switch>

            </div>
        );
    }
}
