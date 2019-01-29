import React, { Component } from 'react';
import {Header} from "./Components/PresentationalComponents/header/Header";
import VisibleTodoList from './Components/ContainerComponents/VisibleTodoList'
import VisibleSider from './Components/ContainerComponents/VisibleSider'
import {AddNewDashboard} from './Components/AddNewDashboard'

export class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <VisibleTodoList />
          </div>
          <AddNewDashboard/>
          {/*<VisibleSider/>*/}
      </div>
    );
  }
}
