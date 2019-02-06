import React from 'react'
import {Provider} from 'react-redux'
import {App} from './app/App'
import './index.css';
import ReactDOM from 'react-dom';
import {reducer} from './app/duck'
import createSagaMiddleware from 'redux-saga'
import {saga} from "./app/duck";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter} from 'react-router-dom'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);