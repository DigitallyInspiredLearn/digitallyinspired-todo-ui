import { createAction, handleActions } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
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
    const my = yield select(state => state.dashboard.myList);
    const shared = yield select(state => state.dashboard.sharedList);
    const allList = my.concat(shared).filter(list => list.todoListName.toLowerCase().includes(
        action.payload.searchDashboards.toLowerCase(),
    ));
    yield put(actions.fetchDashboardSuccess(allList));
}

function* getSubscribers() {
    const res = yield call(getFollowers);
    yield put(actions.fetchSubscribersSuccess(res.data));
    console.log(res.data);
}

export function* saga() {
    yield safeTakeEvery(FETCH_SUBSCRIBERS, getSubscribers);
}
