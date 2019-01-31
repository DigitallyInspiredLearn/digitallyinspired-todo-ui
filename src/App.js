import React, {Component} from 'react';
import {Header} from "./header/Header";
import VisibleTodoList from './dashboard/VisibleTodoList'
import VisibleSider from './sider/VisibleSidebar'

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
