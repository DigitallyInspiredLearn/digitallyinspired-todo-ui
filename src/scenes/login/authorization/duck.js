import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put, select,
} from 'redux-saga/effects';
import axios from 'axios';
import { history } from '../../../config/history';
import { authorization as authorizationApi } from '../../../api/dashboard';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const actions = {
    login: createAction(LOGIN),
    loginSuccess: createAction(LOGIN_SUCCESS),
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
    try {
        const token = yield call(authorizationApi, action.payload);
        yield put(actions.loginSuccess({
            user: action.payload.usernameOrEmail,
            token: token.data.accessToken,
        }));
        yield call(setDefaultApiToken, token.data.accessToken);
        history.replace('/lists');
    } catch (error) {
        console.log(error);
    }
}

function* rehydrateSaga() {
    const { token } = yield select(state => state.auth);
    yield call(setDefaultApiToken, token);
}

export function* saga() {
    yield takeEvery(LOGIN, authorization);
    yield takeEvery('persist/REHYDRATE', rehydrateSaga);
}
