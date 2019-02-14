import {createAction, handleActions} from 'redux-actions';
import {
    takeEvery, call, put, select, takeLatest, delay,
} from 'redux-saga/effects';
import {getOneList, updateList} from '../../api/dashboard';

export const FETCH_LIST = 'list/FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'list/FETCH_LIST_SUCCESS';
export const SEARCH_TASK = 'list/SEARCH_TASK';
export const UPDATE_TITLE_LIST = 'list/UPDATE_TITLE_LIST';
export const UPDATE_TASK_LIST = 'list/UPDATE_TASK_LIST';


export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
    fetchChangeSearch: createAction(SEARCH_TASK),
    updateTitleList: createAction(UPDATE_TITLE_LIST),
    updateTaskList: createAction(UPDATE_TASK_LIST)
};

const initialState = {
    data: {},
};
export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => ({...state, data: action.payload}),

    [UPDATE_TITLE_LIST]: (state, action) => ({
        ...state,
        data: {...state.data, todoListName: action.payload.newTitle}
    }),

    [UPDATE_TASK_LIST]: (state, action) => ({
        ...state,
        data: {
            ...state.data, tasks: state.data.tasks.map(e => (e.id === action.payload.idTask
                ? {
                    ...e, body: action.payload.newTaskName,
                } : e))
        }
    }),

}, initialState);

function* fetchList(action) {
    const r = yield call(getOneList, action.payload);
    yield put(actions.fetchListSuccess(r.data));
}

function* updateTitleList(action) {
    yield delay(1000);
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.id === action.payload.id));
    const res = yield call(updateList, action.payload.id, {...list, todoListName: action.payload.newTitle});
    console.log(res);
}

function* updateTaskList(action) {
    yield delay(1000);
    const list = yield select(state => state.dashboard.toDoBoard.find(item => item.id === action.payload.idDashboard));
    console.log(list);
    const res = yield call(updateList, action.payload.idDashboard, {
        ...list,
        tasks: list.tasks.map(item => item.id === action.payload.idTask ? {
            ...item,
            body: action.payload.newTaskName
        } : item)
    });
    console.log(res);
}

export function* saga() {
    yield takeEvery(FETCH_LIST, fetchList);
    yield takeLatest(UPDATE_TASK_LIST, updateTaskList);
    yield takeLatest(UPDATE_TITLE_LIST, updateTitleList);
}
