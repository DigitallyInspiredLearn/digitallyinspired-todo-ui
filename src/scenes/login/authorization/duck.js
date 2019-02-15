import { createAction } from 'redux-actions';
import {
    takeEvery, call,
} from 'redux-saga/effects';
import { authorization as authorizationApi } from '../../../api/auth';

export const AUTHORIZATION = 'AUTHORIZATION';

export const actions = {
    authorization: createAction(AUTHORIZATION),
};

function* authorization(action) {
    try {
        const token = yield call(authorizationApi, action.payload);
        console.log(token.data);
    } catch (error) {
        console.log(error);
    }
}

export function* saga() {
    yield takeEvery(AUTHORIZATION, authorization);
}
