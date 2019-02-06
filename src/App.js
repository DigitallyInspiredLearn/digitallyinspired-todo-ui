import React, {Component} from 'react';
import './App.css';
import {Header} from "./header/Header";
import VisibleDashboard from './dashboard/VisibleDashboard'
import VisibleOneList from './oneList/VisibleOneList'
import {Redirect, Switch, Route} from 'react-router-dom'
import {Authorization} from "./authorization/login";

class App extends Component {

    render() {
        return (
            <div className="main_block">
                <Header/>
                <Switch>
                    <Route path='/list' component={VisibleDashboard}/>
                    <Route path='/auth' component={Authorization}/>
                    <Route path='/:id' component={VisibleOneList}/>
                    <Redirect to='/auth'/>
                </Switch>
            </div>
        );
    }
}

export default App;
