import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header/Header';
import Main from './components/main/Main'
import {WrappedSidebar} from './components/wrappedSidebar/WrappedSidebar';

class App extends Component {
  
  render() {  
    return (
      <div id="block-main">
          <Header/>
          <Main/>
             
        
          <WrappedSidebar 
            //addDashboard = {this.addDashboard}
          />
      </div>
    );
  }
}

export default App;
