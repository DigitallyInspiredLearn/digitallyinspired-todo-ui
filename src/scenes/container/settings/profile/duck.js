import { createAction, handleActions } from 'redux-actions';
import {
    call, put, take,
} from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../../../helpers/saga';
import {
    getCurrentUser, editProfile as editProfileApi, deleteProfile as deleteProfileApi,
} from '../../../../api/userController';
import history from '../../../../config/history';

export const FETCH_CURRENT_USER = 'settings/FETCH_CURRENT_USER';
export const FETCH_CURRENT_USER_SUCCESS = 'settings/FETCH_CURRENT_USER_SUCCESS';
export const EDIT_PROFILE = 'settings/EDIT_PROFILE';
export const DELETE_PROFILE = 'settings/DELETE_PROFILE';

export const actions = {
    fetchCurrentUser: createAction(FETCH_CURRENT_USER),
    fetchCurrentUserSuccess: createAction(FETCH_CURRENT_USER_SUCCESS),
    editProfile: createAction(EDIT_PROFILE),
    deleteProfile: createAction(DELETE_PROFILE),
};

const initialState = {
    currentUser: undefined,
};

export const reducer = handleActions({
    [FETCH_CURRENT_USER_SUCCESS]: (state, action) => ({ ...state, currentUser: action.payload }),
}, initialState);

export function* fetchUser() {
    const { location: { pathname } } = history;
    if (pathname === '/reg' || pathname === '/auth') {
        // no authorization
    } else {
        const res = yield call(getCurrentUser);
        yield put(actions.fetchCurrentUserSuccess(res.data));
    }
}

export function* editProfile(action) {
    yield call(editProfileApi, action.payload);
    yield call(fetchUser);
}

export function* deleteProfile() {
    // confirm('Delete the profile?');
    yield call(deleteProfileApi);
    yield call(fetchUser);
}

export function* saga() {
    yield safeTakeEvery(FETCH_CURRENT_USER, fetchUser);
    yield safeTakeLatest(EDIT_PROFILE, editProfile);
    yield safeTakeLatest(DELETE_PROFILE, deleteProfile);
}
