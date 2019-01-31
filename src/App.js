import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header/Header';
import Main from './components/main/Main'
import Sidebar from './components/wrappedSidebar/sidebar/Sidebar';

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
