/* eslint-disable no-console */
import {createAction, handleActions} from 'redux-actions';
import {call, put, delay} from 'redux-saga/effects';
import {safeTakeEvery, safeTakeLatest} from '../../helpers/saga';
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
    console.log(action.payload);
    const res = yield call(searchUserByUsername, action.payload);
    console.log(res.data);
    yield put(actions.fetchUser(res.data));
}

export function* saga() {
    yield safeTakeEvery(SEARCH_USERS, fetchUser);

}
