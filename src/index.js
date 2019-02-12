import React from 'react';
import { Provider } from 'react-redux';
import '../assets/index.css';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
import { reducer as listReducer, saga as listSaga } from './scenes/list/duck';
import './api/dashboard';
import { saga, reducer } from './scenes/dashboard/duck';
import App from './App';


const mainReducer = combineReducers({ dashboard: reducer, list: listReducer });
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        saga(),
        listSaga(),
    ]);
}

const store = createStore(mainReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
