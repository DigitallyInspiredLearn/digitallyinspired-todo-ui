import React, {Component} from 'react';
import {Header} from "./home/HomeComponents/header/Header";
import VisibleTodoList from './home/HomeContainers/VisibleTodoList'
import VisibleSider from './home/HomeContainers/VisibleSidebar'

export class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <div id="content">
                    <VisibleTodoList/>
                </div>
                <VisibleSider/>
            </div>
        );
    }
}
