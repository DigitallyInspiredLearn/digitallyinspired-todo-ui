import { createAction, handleActions } from 'redux-actions';
import { call, put } from 'redux-saga/effects';
import {
    getTags,
    addTag as addTagAPI,
    deleteTag as deleteTagAPI,
} from '../../../api/tag';
import { safeTakeEvery } from '../../../helpers/saga';

export const FETCH_TAGS = 'tags/FETCH_TAGS';
export const FETCH_TAGS_SUCCESS = 'tags/FETCH_TAGS_SUCCESS';
export const ADD_TAG = 'tags/ADD_TAG';
export const DELETE_TAG = 'tags/DELETE_TAG';

const initialState = {
    tags: [],
};

export const actions = {
    fetchTags: createAction(FETCH_TAGS),
    fetchTagsSuccess: createAction(FETCH_TAGS_SUCCESS),
    addTag: createAction(ADD_TAG),
    deleteTag: createAction(DELETE_TAG),
};

export const reducer = handleActions({
    [FETCH_TAGS_SUCCESS]: (state, action) => ({ ...state, tags: action.payload }),
}, initialState);

export function* fetchAllTags() {
    const tags = (yield call(getTags)).data;
    yield put(actions.fetchTagsSuccess(tags));
}

export function* addTag(action) {
    const { payload: { tagName, color } } = action;
    yield call(addTagAPI, { tagName, color });
    yield call(fetchAllTags);
}

export function* deleteTag(action) {
    const { payload: { id } } = action;
    yield call(deleteTagAPI, id);
    yield call(fetchAllTags);
}

export function* saga() {
    yield safeTakeEvery(FETCH_TAGS, fetchAllTags);
    yield safeTakeEvery(ADD_TAG, addTag);
    yield safeTakeEvery(DELETE_TAG, deleteTag);
}
