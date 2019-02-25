/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import './api/dashboard';
import App from './App';
import history from './config/history';
import { store, persistor } from './config/store';

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
