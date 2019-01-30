import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Provider from "react-redux/es/components/Provider";
import { combineReducers, createStore } from "redux";
//import {rootReducer} from "./store/reducers";
import App from "./App";
import { sidebarReducer } from "./store/sidebar/reducerSidebar";
import { dashboardReducer } from "./store/dashboard/reducerDashboard";

const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    dashboard: dashboardReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();
