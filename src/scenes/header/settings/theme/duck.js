/* eslint-disable no-console */
import { createAction, handleActions } from 'redux-actions';

export const TOGGLE_THEME = 'settings/theme/TOGGLE_THEME';


export const actions = {
    toggleTheme: createAction(TOGGLE_THEME),
};

const initialState = {
    type: 'day',
};

export const reducer = handleActions({
    [TOGGLE_THEME]: state => ({ ...state, type: state.type === 'day' ? 'night' : 'day' }),

}, initialState);
