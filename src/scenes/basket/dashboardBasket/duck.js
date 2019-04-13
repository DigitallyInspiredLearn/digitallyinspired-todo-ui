import { createAction, handleActions } from 'redux-actions';
import { call, put, select } from 'redux-saga/effects';
import { safeTakeEvery, safeTakeLatest } from '../../../helpers/saga';
import { deleteList, enableTodoList, getMyList } from '../../../api/dashboard';

export const FETCH_DELETED_DASHBOARD = 'basket/FETCH_DELETED_DASHBOARD';
export const FETCH_DELETED_DASHBOARD_SUCCESS = 'basket/FETCH_DELETED_DASHBOARD_SUCCESS';
export const CHANGE_PAGINATION = 'CHANGE_PAGINATION';
export const CHANGE_SIZE = 'basket/CHANGE_SIZE';
export const ENABLE_LIST = 'basket/ENABLE_LIST';
export const DELETE_LIST_FROM_BASKET = 'basket/DELETE_LIST_FROM_BASKET';
export const RESTORE_LIST_FROM_BASKET = 'basket/RESTORE_LIST_FROM_BASKET';


export const actions = {
    changeSize: createAction(CHANGE_SIZE),
    changePagination: createAction(CHANGE_PAGINATION),
    fetchDeletedDashboard: createAction(FETCH_DELETED_DASHBOARD),
    fetchDashboardDeletedSuccess: createAction(FETCH_DELETED_DASHBOARD_SUCCESS),
    enableLists: createAction(ENABLE_LIST),
    deletedList: createAction(DELETE_LIST_FROM_BASKET),
    restoreList: createAction(RESTORE_LIST_FROM_BASKET),
};

const initialState = {
    deletedListsRaw: [],
    currentPage: 0,
    pageSize: 4,
    totalElements: 0,
};

export const reducer = handleActions({
    [FETCH_DELETED_DASHBOARD_SUCCESS]: (state, action) => ({
        ...state,
        deletedListsRaw: action.payload.deletedLists,
        totalElements: action.payload.countElements,
        totalPages: action.payload.countPages,
    }),
    [CHANGE_PAGINATION]: (state, action) => ({ ...state, currentPage: action.payload }),
    [CHANGE_SIZE]: (state, action) => ({ ...state, pageSize: action.payload, currentPage: 0 }),

}, initialState);

function* fetchAllDeletedLists() {
    const { pageSize, currentPage } = yield select(state => state.basket);
    const res = yield call(getMyList, currentPage, pageSize, 'id,asc', 'INACTIVE');
    const countElements = res.data.totalElements;
    const countPages = res.data.totalPages;
    const deletedLists = res.data.content;
    yield put(actions.fetchDashboardDeletedSuccess({ deletedLists, countElements, countPages }));
}

function* deleteListFromBasket(action) {
    yield call(deleteList, action.payload.id);
    yield call(fetchAllDeletedLists);
}

function* restoreListFromBasket(action) {
    yield call(enableTodoList, action.payload.id);
    yield call(fetchAllDeletedLists);
}
export function* saga() {
    yield safeTakeEvery([FETCH_DELETED_DASHBOARD, CHANGE_PAGINATION, CHANGE_SIZE], fetchAllDeletedLists);
    yield safeTakeEvery(DELETE_LIST_FROM_BASKET, deleteListFromBasket);
    yield safeTakeEvery(RESTORE_LIST_FROM_BASKET, restoreListFromBasket);
}
