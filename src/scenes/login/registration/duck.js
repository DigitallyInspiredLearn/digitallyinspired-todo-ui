import { createAction } from 'redux-actions';
import {
    takeEvery, call,
} from 'redux-saga/effects';
import { registration as registrationApi } from '../../../api/dashboard';

export const REGISTRATION = 'REGISTRATION';

export const actions = {
    registration: createAction(REGISTRATION),
};

function* registration(action) {
    try {
        yield call(registrationApi(action.payload));
    } catch (e) {
        console.log(e)
    }
}

export function* saga() {
    yield takeEvery(REGISTRATION, registration);
}