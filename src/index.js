import React from 'react'
import {Provider} from 'react-redux'
import {App} from './app/App'
import './index.css';
import ReactDOM from 'react-dom';
import {reducer} from './app/duck'
import createSagaMiddleware from 'redux-saga'
import {saga} from "./app/duck";
import {applyMiddleware, createStore, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {BrowserRouter} from 'react-router-dom'
import {reducer as listReducer} from "./app/oneList/duck";
import './config/axios';
import {all, fork} from 'redux-saga/effects'
import {saga as listSaga} from './app/oneList/duck'

const mainReducer = combineReducers({dashboard: reducer, list: listReducer});
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        fork(saga),
        fork(listSaga)
    ])
}

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);