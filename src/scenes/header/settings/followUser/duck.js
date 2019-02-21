/* eslint-disable no-unused-expressions */
import { createAction, handleActions } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import { safeTakeEvery } from '../../../../helpers/saga';
import { followUser as followUserApi, searchUserByUsername } from '../../../../api/userController';

export const SEARCH_USERS_FOR_FOLLOWING = 'followUserReducer/SEARCH_USERS_FOR_FOLLOWING';
export const FETCH_USERS_FOR_FOLLOWING = 'followUserReducer/FETCH_USERS_FOR_FOLLOWING';
export const FOLLOW_USER = 'followUserReducer/FOLLOW_USER';
export const GET_MESSAGE_ON_SUCCESS_FOLLOWING = 'followUserReducer/GET_MESSAGE_ON_SUCCESS_FOLLOWING';

export const actions = {
    searchUserForFollowing: createAction(SEARCH_USERS_FOR_FOLLOWING),
    followUser: createAction(FOLLOW_USER),
    fetchUser: createAction(FETCH_USERS_FOR_FOLLOWING),
    getMessageOnAccessFollowing: createAction(GET_MESSAGE_ON_SUCCESS_FOLLOWING),
};

const initialState = {
    search: '',
    userNameList: [],
    message: '',
};

export const reducer = handleActions({
    [SEARCH_USERS_FOR_FOLLOWING]: (state, action) => ({ ...state, search: action.payload }),
    [FETCH_USERS_FOR_FOLLOWING]: (state, action) => ({ ...state, userNameList: action.payload }),
    [GET_MESSAGE_ON_SUCCESS_FOLLOWING]: (state, action) => ({ ...state, message: action.payload }),
}, initialState);

function* serchUsersForFollowing(action) {
    const res = yield call(searchUserByUsername, action.payload);
    yield put(actions.fetchUser(res.data));
}

function* followUser(action) {
    try {
        const res = yield call(followUserApi, action.payload);
        yield put(actions.getMessageOnAccessFollowing(res.data.message));
    } catch (e) {
        e.response.status === 404 && (yield put(actions.getMessageOnAccessFollowing("You can't follow this user!")));
    }
}

export function* saga() {
    yield safeTakeEvery(SEARCH_USERS_FOR_FOLLOWING, serchUsersForFollowing);
    yield safeTakeEvery(FOLLOW_USER, followUser);
}
