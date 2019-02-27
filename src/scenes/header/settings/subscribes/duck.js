import { createAction, handleActions } from 'redux-actions';
import { call, put, select } from 'redux-saga/effects';
import { safeTakeEvery } from '../../../../helpers/saga';
import { getFollowers } from '../../../../api/userController';

export const SEARCH_SUBSCRIBERS = 'subscribeReducer/SEARCH_SUBSCRIBERS';
export const FETCH_SUBSCRIBERS = 'subscribeReducer/FETCH_SUBSCRIBERS';
export const FETCH_SUBSCRIBERS_SUCCESS = 'subscribeReducer/FETCH_SUBSCRIBERS_SUCCESS';

export const actions = {
    searchSubscribers: createAction(SEARCH_SUBSCRIBERS),
    fetchSubscribers: createAction(FETCH_SUBSCRIBERS),
    fetchSubscribersSuccess: createAction(FETCH_SUBSCRIBERS_SUCCESS),
};

const initialState = {
    search: '',
    subscribers: [],
};

export const reducer = handleActions({
    [SEARCH_SUBSCRIBERS]: (state, action) => ({ ...state, search: action.payload }),
    [FETCH_SUBSCRIBERS_SUCCESS]: (state, action) => ({ ...state, subscribers: action.payload }),
}, initialState);

function* searchUsers(action) {
    const subscribers = yield select(state => state.subscribe.subscribers);
    const mutateData = subscribers.filter(subscriber => subscriber.username.toLowerCase().includes(
        action.payload.toLowerCase(),
    ));
    yield put(actions.fetchSubscribersSuccess(mutateData));
}

function* getSubscribers() {
    const res = yield call(getFollowers);
    yield put(actions.fetchSubscribersSuccess(res.data));
}

export function* saga() {
    yield safeTakeEvery(FETCH_SUBSCRIBERS, getSubscribers);
    yield safeTakeEvery(SEARCH_SUBSCRIBERS, searchUsers);
}
