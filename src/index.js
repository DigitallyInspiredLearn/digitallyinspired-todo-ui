import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Provider from "react-redux/es/components/Provider";
import {createStore, applyMiddleware} from "redux";
import App from "./App";
import {reducer} from "./duck";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import {saga} from './duck';
import {BrowserRouter} from 'react-router-dom';
import './config/axios';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
