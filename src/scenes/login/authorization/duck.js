/* eslint-disable no-console */
import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
import history from '../../../config/history';
import { authorization as authorizationApi } from '../../../api/auth';
import { safeTakeEvery } from '../../../helpers/saga';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const actions = {
    login: createAction(LOGIN),
    loginSuccess: createAction(LOGIN_SUCCESS),
    logout: createAction(LOGOUT),
};

const initialState = {
    user: '',
    token: '',
};

export const reducer = handleActions({
    [LOGIN_SUCCESS]: (state, action) => ({
        ...state,
        user: action.payload.user,
        token: action.payload.token,
    }),

}, initialState);

function setDefaultApiToken(token) {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
}

function* authorization(action) {
    const token = yield call(authorizationApi, action.payload);
    yield put(actions.loginSuccess({
        user: action.payload.usernameOrEmail,
        token: token.data.accessToken,
    }));
    yield call(setDefaultApiToken, token.data.accessToken);
    history.replace('/lists');
}

function* rehydrateSaga() {
    const { token } = yield select(state => state.auth);
    yield call(setDefaultApiToken, token);
}

function* logout() {
    confirm('Вы точно хотите выйти?') && (
        yield call(setDefaultApiToken, ''),
        history.replace('/auth'),
        yield put(actions.loginSuccess({
            user: '',
            token: '',
        }))
    );
}

export function* saga() {
    yield safeTakeEvery(LOGIN, authorization);
    yield safeTakeEvery('persist/REHYDRATE', rehydrateSaga);
    yield safeTakeEvery(LOGOUT, logout);
}
