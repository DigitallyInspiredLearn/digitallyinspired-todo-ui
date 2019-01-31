import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {App} from './App'
import './index.css';
import ReactDOM from 'react-dom';
import {reducer} from './duck'
import {PersistGate} from 'redux-persist/integration/react'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'toDoBoard',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);