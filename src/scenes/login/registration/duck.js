import { createAction } from 'redux-actions';
import {
    takeEvery, call,
} from 'redux-saga/effects';
import { registration as registrationApi } from '../../../api/auth';
import history from '../../../config/history';

export const REGISTRATION = 'REGISTRATION';

export const actions = {
    registration: createAction(REGISTRATION),
};

function* registration(action) {
    try {
        yield call(registrationApi, action.payload);
        history.replace('/list');
    } catch (error) {
        console.log(error);
    }
}

export function* saga() {
    yield takeEvery(REGISTRATION, registration);
}
