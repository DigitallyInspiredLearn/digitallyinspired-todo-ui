/* eslint-disable import/prefer-default-export */
import { all, fork } from 'redux-saga/effects';
import { saga as registrationSaga } from './registration/duck';
import { saga as authorizationSaga } from './authorization/duck';

export function* loginPageSaga() {
    yield all([
        registrationSaga(),
        authorizationSaga(),
    ]);
}
