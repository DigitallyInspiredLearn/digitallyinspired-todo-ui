import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/reducers';
import {reducer} from './store/duck'
 
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const CHANGE_DASHBOARD_TITLE = 'CHANGE_DASHBOARD_TITLE';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_SELECTED = 'CHANGE_TASK_SELECTED';
export const ADD_INPUT_TITLE = 'ADD_INPUT_TITLE';
export const ADD_INPUT_TASK = 'ADD_INPUT_TASK';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
