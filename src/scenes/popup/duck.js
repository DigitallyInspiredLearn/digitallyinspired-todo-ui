/* eslint-disable no-console */
import {createAction, handleActions} from 'redux-actions';
import {call, put, select} from 'redux-saga/effects';
import {safeTakeEvery} from '../../helpers/saga';
import {searchUserByUsername} from "../../api/userController";

export const SEARCH_USERS = 'popup/SEARCH_USERS';
export const FETCH_USERS = 'popup/FETCH_USERS';

export const actions = {
    searchUser: createAction(SEARCH_USERS),
    fetchUser: createAction(FETCH_USERS),
};

const initialState = {
    users: [],
    search: '',
};

export const reducer = handleActions({
    [SEARCH_USERS]: (state, action) => ({...state, search: action.payload}),
    [FETCH_USERS]: (state, action) => ({...state, users: action.payload}),

}, initialState);

function* fetchUser(action) {
    const array = ["User is not found!"];
    const res = yield call(searchUserByUsername, action.payload);
    const currentUserName = yield select(state => state.profile.currentUser.username);
    const users = res.data.filter(i => i !== currentUserName);
    users.length === 0 ? yield put(actions.fetchUser(array)) : yield put(actions.fetchUser(users));
}


export function* saga() {
    yield safeTakeEvery(SEARCH_USERS, fetchUser);
}
