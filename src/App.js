import React, { Component } from 'react';
import './App.css';
import { Header } from './scenes/header/Header';
import VisibleDashboard from './scenes/dashboard/VisibleDashboard'
import VisibleBoard from './scenes/board/VisibleBoard';
import { Auth } from './scenes/auth/Auth'
import { Switch, Route, Redirect }  from 'react-router-dom'

class App extends Component {

  render() {  
    return (
      <div id="block-main">
          <Header />
          <Switch>
            <Route path = '/auth' component = { Auth }/>
            <Route path = '/list' component = { VisibleDashboard }/>
            <Route path = '/:id' component = { VisibleBoard }/>
            <Redirect to = '/list'/>
          </Switch>
          
      </div>
    );
  }
}

export default App;
