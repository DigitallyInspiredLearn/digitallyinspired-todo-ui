import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './Redux/reducer/reducer'
import { App } from './App'
import * as serviceWorker from './serviceWorker';
import './index.css';
import ReactDOM from 'react-dom';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
