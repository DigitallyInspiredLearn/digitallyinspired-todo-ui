import React, { Component } from 'react';
import {Header} from "./Components/PresentationalComponents/header/Header";
import VisibleTodoList from './Components/ContainerComponents/VisibleTodoList'
import VisibleSider from './Components/ContainerComponents/VisibleSider'
import {BtnAddingNewDashboard} from "./Components/PresentationalComponents/sider/BtnAddingNewDashboard";

export class App extends Component {

    updateDisplayFlex = () => {
        this.setState({
            displayStyle: 'flex',
            animation: 'move 1s',
        })
    };

    updateDisplayNone = () => {
        this.setState({
            displayStyle: 'none',
        })
    };
    render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <VisibleTodoList/>
          </div>
          <BtnAddingNewDashboard/>
          <VisibleSider />
      </div>
    );
  }
}
