import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { App } from './App'
import * as serviceWorker from './serviceWorker';
import './index.css';
import ReactDOM from 'react-dom';
import {actions, reducer} from './Components/duck'

const store = createStore(reducer);

// const  saveUpdatingStorege = (toDoBoard) =>{
//     localStorage.setItem('toDoData',JSON.stringify(toDoBoard));
// };
// store.subscribe(()=> saveUpdatingStorege(store.getState()));

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
