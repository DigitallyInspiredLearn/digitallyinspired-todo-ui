import { createAction } from 'redux-actions';
import { call } from 'redux-saga/effects';
import { registration as registrationApi } from '../../../api/auth';
import history from '../../../config/history';
import { safeTakeEvery } from '../../../helpers/saga';
// import { followUser as followUserApi } from '../../../api/userController';

export const REGISTRATION = 'REGISTRATION';

export const actions = {
    registration: createAction(REGISTRATION),
};

export function* registration(action) {
    const res = yield call(registrationApi, action.payload);
    // (res.status === 201) && (yield call(followUserApi, action.payload.username));
    history.replace('/list');
}

export function* saga() {
    yield safeTakeEvery(REGISTRATION, registration);
}
