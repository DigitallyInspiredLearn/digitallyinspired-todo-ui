import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Provider from "react-redux/es/components/Provider";
import { createStore } from "redux";
import App from "./App";
import { reducer } from "./store/duck";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
    key: 'dashboard',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
// }



const store = createStore(persistedReducer);
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App/>
        </PersistGate>

    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
