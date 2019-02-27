import { combineReducers } from 'redux';
import { reducer as authReducer } from '../scenes/login/authorization/duck';
import { reducer as popupReducer } from '../scenes/popup/duck';
import { reducer as profileReducer } from '../scenes/header/settings/profile/duck';
import { reducer as followUserReducer } from '../scenes/header/settings/followUser/duck';
import { reducer as themeReducer } from '../scenes/header/settings/theme/duck';
import { reducer as dashboardReducer } from '../scenes/dashboard/duck';
import { reducer as listReducer } from '../scenes/list/duck';
import { reducer as subscribeReducer } from '../scenes/header/settings/subscribes/duck';

export const mainReducer = combineReducers({
    dashboard: dashboardReducer,
    list: listReducer,
    auth: authReducer,
    popup: popupReducer,
    profile: profileReducer,
    followUser: followUserReducer,
    theme: themeReducer,
    subscribe: subscribeReducer,
});
