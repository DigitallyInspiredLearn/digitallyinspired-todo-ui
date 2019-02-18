import { takeLatest, takeEvery } from 'redux-saga/effects';
import { sagas as globalSagas } from '../../duck';

export function safeTakeLatest(action, saga) {
    return takeLatest(action, function* handler(...args) {
        yield* globalSagas.globalErrorHandler(function* handler2() {
            yield* saga(...args);
        });
    });
}

export function safeTakeEvery(action, saga) {
    return takeEvery(action, function* handler(...args) {
        yield* globalSagas.globalErrorHandler(function* handler2() {
            yield* saga(...args);
        });
    });
}
