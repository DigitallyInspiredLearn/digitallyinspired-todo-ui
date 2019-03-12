/* eslint-disable no-console,no-alert,no-restricted-globals */
import { createAction } from 'redux-actions';
import { takeEvery } from 'redux-saga/effects';
import history from './config/history';

export const ERROR = 'ERROR';


export const actions = {
    error: createAction(ERROR),
};

export function* errorHandler(gen) {
    try {
        yield* gen();
    } catch (e) {
        if (e.response.status === 401) {
            (history.location.pathname === '/auth' || history.location.pathname === '/reg')
                || (alert('You are not log in!'),
                console.log('Error 401'),
                history.push('/auth'),
                location.reload(true)
                );
        } else if (e.response.status === 500) {
            console.log('Error 500');
            history.push('/error500');
        } else if (e.response.status === 400) {
            console.log('Error 400');
        } else if (e.response.status === 404) {
            console.log('Error 404');
            history.push('/error404');
        } else console.log(e);
    }
}

export function* saga() {
    yield takeEvery(ERROR, errorHandler);
}
