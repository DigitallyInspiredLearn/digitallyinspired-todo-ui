import React, {Component} from 'react';
import {Header} from "./header/Header";
import VisibleTodoList from './dashboard/VisibleTodoList'

import {Switch, Route, Redirect} from 'react-router-dom'
import {AvtorizationPage} from "./autorization/Autorization";
import {OneList} from "./dashboard/oneList/OneList";

export class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div id="content">
                    <Switch>
                        <Route path='/lists' component={VisibleTodoList}/>
                        <Route path='/aut' component={AvtorizationPage}/>
                        <Route path='/list' component={OneList}/>
                        <Redirect to='/aut'/>
                    </Switch>
                </div>
            </div>
        );
    }
}
