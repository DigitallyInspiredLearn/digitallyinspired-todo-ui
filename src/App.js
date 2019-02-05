import React, { Component } from 'react';
import './App.css';
import {Header} from './header/Header';
import Main from './main/Main'
import Sidebar from './sidebar/Sidebar';
import Board from './board/Board';
import { Auth } from './auth/Auth'
import {Switch, Route, Redirect}  from 'react-router-dom'

class App extends Component {
  renderList = (props) => {
    console.log(props)
    return <h2>LIST!!!</h2>
  }
  render() {  
    return (
      <div id="block-main">
          <Header />
          <Switch>
            <Route path = '/auth' component = {Auth}/>
            <Route path = '/list' component = {Main}/>
            <Route path = '/2' component = {this.renderList}/>
            <Route path = '/:id' component = {Board}/>
            <Redirect to = '/auth'/>
          </Switch>
          <Sidebar />
      </div>
    );
  }
}

export default App;
