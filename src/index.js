import React from 'react'
import {Provider} from 'react-redux'
import {App} from './app/App'
import './index.css';
import ReactDOM from 'react-dom';
import {reducer} from './app/home/duck'
import createSagaMiddleware from 'redux-saga'
import {saga} from "./app/home/duck";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
// import {AvtorizationPage} from "./app/avtorization/avtorization";


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);