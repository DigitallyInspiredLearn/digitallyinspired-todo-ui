import React, { Component } from 'react';
import './App.css';
import {Header} from './header/Header';
import Main from './main/Main'
import Sidebar from './sidebar/Sidebar';

class App extends Component {
  
  render() {  
    return (
      <div id="block-main">
          <Header />
          <Main />
          <Sidebar />
      </div>
    );
  }
}

export default App;
