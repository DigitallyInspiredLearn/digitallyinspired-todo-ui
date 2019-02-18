import { combineReducers } from 'redux';
import { reducer as listReducer } from './scenes/list/duck';
import { reducer } from './scenes/dashboard/reducer';
import { reducer as authReducer } from './scenes/login/authorization/duck';

export const mainReducer = combineReducers({
    dashboard: reducer,
    list: listReducer,
    auth: authReducer,
});
