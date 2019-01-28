import React, { Component } from 'react';
import {Header} from "./Components/PresentationalComponents/header/Header";
import VisibleTodoList from './Components/ContainerComponents/VisibleTodoList'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <VisibleTodoList />
          </div>
      </div>
    );
  }
}

export default App;
