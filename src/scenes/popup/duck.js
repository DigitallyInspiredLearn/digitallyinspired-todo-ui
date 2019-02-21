/* eslint-disable no-console */
import {createAction, handleActions} from 'redux-actions';
import {call, put, delay} from 'redux-saga/effects';
import {safeTakeEvery, safeTakeLatest} from '../../helpers/saga';
import {searchUserByUsername} from "../../api/userController";

export const SEARCH_USER = 'popup/SEARCH_USER';
export const FETCH_USER = 'popup/FETCH_USER';


export const actions = {
    searchUser: createAction(SEARCH_USER),
    fetchUser: createAction(FETCH_USER),
};

const initialState = {
    users: [],
    search: '',
};

export const reducer = handleActions({
    [SEARCH_USER]: (state, action) => ({...state, search: action.payload}),
    [FETCH_USER]: (state, action) => ({...state, users: action.payload}),

}, initialState);

function* fetchUser(action) {
    console.log(action.payload);
    const res = yield call(searchUserByUsername, action.payload);
    console.log(res.data);
    yield put(actions.fetchUser(res.data));
}

export function* saga() {
    yield safeTakeEvery(SEARCH_USER, fetchUser);

}
