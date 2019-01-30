import React, { Component } from 'react';
import {Header} from "./Components/PresentationalComponents/header/Header";
import VisibleTodoList from './Components/SmartComponents/VisibleTodoList'
import VisibleSider from './Components/SmartComponents/VisibleSidebar'

export class App extends Component {

    randomInteger = (min, max, arr) => {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        rand = Math.round(rand);

       arr.forEach( e => {
            e.idList === rand ? this.randomInteger(min, max, arr) : e.tasks.forEach(i =>
                i.id === rand ? this.randomInteger(min, max, arr) : rand)
        });
        return rand;
    };

    render() {
    return (
      <div className="App">
          <Header/>
          <div id="content">
              <VisibleTodoList randomInteger= { this.randomInteger } />
          </div>
          <VisibleSider randomInteger= { this.randomInteger } />
      </div>
    );
  }
}
