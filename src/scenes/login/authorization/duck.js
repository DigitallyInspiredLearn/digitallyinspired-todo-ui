import { createAction } from 'redux-actions';
import {
    takeEvery, call,
} from 'redux-saga/effects';
import { authorization as authorizationApi } from '../../../api/dashboard';

export const AUTHORIZATION = 'AUTHORIZATION';

export const actions = {
    authorization: createAction(AUTHORIZATION),
};

function* authorization(action) {
    try {
        yield call(authorizationApi(action.payload));
    } catch (error) {
        // console.error(error)
    }
}

export function* saga() {
    yield takeEvery(AUTHORIZATION, authorization);
}
