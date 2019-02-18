/* eslint-disable no-console */
import { createAction } from 'redux-actions';

import { takeEvery } from 'redux-saga/effects';

export const ERROR = 'ERROR';

export const actions = {
    error: createAction(ERROR),
};

export function* errorHandler(gen) {
    try {
        yield* gen();
    } catch (e) {
        console.log(e);
    }
}

export function* saga() {
    yield takeEvery(ERROR, errorHandler);
}
