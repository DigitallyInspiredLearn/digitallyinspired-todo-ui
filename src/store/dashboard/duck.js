import { createActions, handleActions } from 'redux-actions';

const DELETE_DASHBOARD = 'DELETE_DASHBOARD';


export const actions = {
    deleteDashboard: createActions(DELETE_DASHBOARD)
};

const initialState = {
    data: {},
};

export const reducer = handleActions({
   ['deleteDashboard']: (state, action) => {return state}
}, initialState);