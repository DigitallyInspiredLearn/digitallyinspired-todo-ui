import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import * as serviceWorker from './serviceWorker';
//import { rootReducer } from './store/reducers';
import { reducer } from './store/duck'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { initialState } from './store/duck'
import {saga} from './store/duck'

const persistConfig = {
    key: 'dashboard',
    storage,
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(saga);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>

    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
