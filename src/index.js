import React from 'react';
import { Provider } from 'react-redux';
import 'regenerator-runtime/runtime';
import ReactDOM from 'react-dom';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router-dom';
import { saga as listSaga } from './scenes/list/duck';
import loginPageSaga from './scenes/login/duck';
import './api/dashboard';
import { saga } from './scenes/dashboard/duck';
import App from './App';
import history from './config/history';
import { saga as popupSaga } from './scenes/popup/duck';
import { saga as profileSaga } from './scenes/header/settings/profile/duck';
import { saga as followSaga } from './scenes/header/settings/followUser/duck';
import { mainReducer } from './config/reducer';

const persistConfig = {
    key: 'app',
    whitelist: ['auth'],
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
                <App />
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
