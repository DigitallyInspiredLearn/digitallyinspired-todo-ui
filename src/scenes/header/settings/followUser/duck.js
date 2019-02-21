import { createAction, handleActions } from 'redux-actions';
import { call } from 'redux-saga/effects';
import { safeTakeEvery } from '../../../../helpers/saga';
import getCurrentUser from '../../../../api/userController';

export const SEARCH_USERS_FOR_FOLLOWING = 'settings/SEARCH_USERS_FOR_FOLLOWING';
export const FOLLOW_USER = 'settings/FOLLOW_USER';

export const actions = {
    searchUserForFollowing: createAction(SEARCH_USERS_FOR_FOLLOWING),
    followUser: createAction(FOLLOW_USER),
};

const initialState = {
    search: '',
    userNameList: [],
    messageBeforeRequest: {
        success: false,
        message: "You can't follow this user!",
    },
};

export const reducer = handleActions({
    [SEARCH_USERS_FOR_FOLLOWING]: (state, action) => ({ ...state, search: action.payload }),
}, initialState);