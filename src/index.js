/* eslint-disable*/
import React from 'react';
import { Provider } from 'react-redux';
import '../assets/index.css';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { saga as listSaga, reducer as listReducer } from './scenes/list/duck';
import loginPageSaga from './scenes/login/duck';
import './api/dashboard';
import { saga, reducer } from './scenes/dashboard/duck';
import App from './App';
import history from './config/history';
import { reducer as authReducer } from './scenes/login/authorization/duck';
import { reducer as popupReducer, saga as popupSaga } from './scenes/popup/duck';
import {reducer as profileReducer, saga as profileSaga} from "./scenes/header/settings/prifile/duck";
import {reducer as followUserReducer, saga as followSaga} from "./scenes/header/settings/followUser/duck";
import theme from './config/theme';

const mainReducer = combineReducers({
    dashboard: reducer,
    list: listReducer,
    auth: authReducer,
    popup: popupReducer,
    profileReducer: profileReducer,
    followUserReducer: followUserReducer,
});

const persistConfig = {
    key: 'app',
    whitelist:['auth'],
    storage,
};

const persistedReducer = persistReducer(persistConfig, mainReducer);

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    yield all([
        saga(),
        listSaga(),
        loginPageSaga(),
        popupSaga(),
        followSaga(),
        profileSaga(),
    ]);
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
