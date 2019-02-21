import { createAction, handleActions } from 'redux-actions';
import {
    call, put, select, delay,
} from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../../../helpers/saga';
import getCurrentUser from '../../../../api/userController';

export const FETCH_CURRENT_USER = 'profileReducer/FETCH_CURRENT_USER';
export const FETCH_CURRENT_USER_SUCCESS = 'profileReducer/FETCH_CURRENT_USER_SUCCESS';

export const actions = {
    fetchCurrentUser: createAction(FETCH_CURRENT_USER),
    fetchCurrentUserSuccess: createAction(FETCH_CURRENT_USER_SUCCESS),
};

const initialState = {
    currentUser: {},
};

export const reducer = handleActions({
    [FETCH_CURRENT_USER_SUCCESS]: (state, action) => ({ ...state, currentUser: action.payload }),
}, initialState);

function* fetchUser() {
    console.log("=== fetch user ===");
    const res = yield call(getCurrentUser);
    console.log(res);
}

export function* saga() {
    yield safeTakeEvery(FETCH_CURRENT_USER, fetchUser);
}
