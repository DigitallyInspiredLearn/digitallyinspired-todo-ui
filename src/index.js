import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App } from './App'
import * as serviceWorker from './serviceWorker';
import './index.css';
import ReactDOM from 'react-dom';
import {reducer} from './Components/duck'


const store = createStore(reducer);
// store.subscribe(()=>
//     localStorage.setItem('toDoData',JSON.stringify(this.props.toDoBoard.getState()))
// );
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
