import React from 'react';
import { combineReducers } from 'redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { rootReducer } from './store/reducers';
import { dashboardReducer } from './store/dashboardReducer'
//import {reducer as dashboardReducer} from './components/dashboard/duck' 
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const CHANGE_DASHBOARD_TITLE = 'CHANGE_DASHBOARD_TITLE';
export const DELETE_TASK = 'DELETE_TASK';
export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_SELECTED = 'CHANGE_TASK_SELECTED';


const reducer = combineReducers({
    root: rootReducer,
    dashboard: dashboardReducer,
});

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
