import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put,
} from 'redux-saga/effects';
import { getOneList } from '../../api/dashboard';

export const FETCH_LIST = 'list/FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'list/FETCH_LIST_SUCCESS';

export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
};

const initialState = {
    data: {},
};
export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => ({ ...state, data: action.payload }),
}, initialState);

function* fetchList(action) {
    const r = yield call(getOneList, action.payload);
    yield put(actions.fetchListSuccess(r.data));
}

export function* saga() {
    yield takeEvery(FETCH_LIST, fetchList);
}
