/* eslint-disable default-case */
import {combineReducers} from 'redux'
import {dashboardReducer} from './dashboardReducer'
import {sidebarReducer} from './sidebarReducer'
//export const DELETE_DASHBOARD = 'DASHBOARD_DELETE';

export const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    sidebar: sidebarReducer
});