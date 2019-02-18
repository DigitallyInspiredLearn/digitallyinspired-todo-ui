import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put, takeLatest, delay,
} from 'redux-saga/effects';

import { getOneList } from '../../api/list';
import { updateList, deleteList, getTasks } from '../../api/dashboard';
import { safeTakeEvery, safeTakeLatest } from '../../helpers/saga';


export const FETCH_LIST = 'list/FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'list/FETCH_LIST_SUCCESS';
export const SEARCH_TASK = 'list/SEARCH_TASK';
export const UPDATE_TITLE_LIST = 'list/UPDATE_TITLE_LIST';
export const UPDATE_TASK_LIST = 'list/UPDATE_TASK_LIST';
export const FETCH_CHANGE_LIST_SUCCESS = 'list/FETCH_CHANGE_LIST_SUCCESS';
export const ADD_TASK_LIST = 'list/ADD_TASK_LIST';
export const DELETE_TASK_LIST = 'list/DELETE_TASK_LIST';
export const DELETE_LIST = 'list/DELETE_LIST';


export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
    changeSearch: createAction(SEARCH_TASK),
    updateTitleList: createAction(UPDATE_TITLE_LIST),
    updateTaskList: createAction(UPDATE_TASK_LIST),
    changeListSuccess: createAction(FETCH_CHANGE_LIST_SUCCESS),
    addTaskList: createAction(ADD_TASK_LIST),
    deleteList: createAction(DELETE_LIST),
    deleteTaskList: createAction(DELETE_TASK_LIST),
};

const initialState = {
    data: {},
    search: '',
};
export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => ({...state, data: action.payload}),

    [FETCH_CHANGE_LIST_SUCCESS]: (state, action) => ({...state, data: action.payload}),

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

    [SEARCH_TASK]: (state, action) => ({...state, search: action.payload}),

}, initialState);

function* fetchList(action) {
    console.log(action.payload);
    const r = yield call(getOneList, action.payload);
    console.log(r.data);
    const tas = yield call(getTasks, action.payload);
    console.log(tas.data);
    yield put(actions.fetchListSuccess(r.data));
}

function* updateTitle(action) {
    yield delay(1000);
    const list = yield call(getOneList, action.payload.id);
    const res = yield call(updateList, action.payload.id, {...list.data, todoListName: action.payload.newTitle});
    console.log(res);
}

function* updateTask(action) {
    yield delay(1000);
    const list = yield call(getOneList, action.payload.idDashboard);
    const res = yield call(updateList, action.payload.idDashboard, {
        ...list.data,
        tasks: list.data.tasks.map(item => item.id === action.payload.idTask ? {
            ...item,
            body: action.payload.newTaskName
        } : item)
    });
    console.log(res);
}

function* fetchChangeSearch(action) {
    const list = yield call(getOneList, action.payload.idDashboard);
    action.payload.search === '' ? yield put(actions.fetchListSuccess(list.data)) :
        yield put(actions.changeListSuccess({
            ...list.data,
            tasks: list.data.tasks.filter(i => i.body.indexOf(action.payload.search) >= 0)
        }));
}

function* addTask(action) {
    const list = yield call(getOneList, action.payload.idDashboard);
    console.log(list.data);
    const res = yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list.data,
            tasks:
                [
                    ...list.data.tasks,
                    {
                        id: Number(action.payload.idTask),
                        isComplete: false,
                        body: action.payload.nameTask,
                    },
                ],
        },
    );
    console.log(res);
    const r = yield call(getOneList, action.payload.idDashboard);
    console.log(r.data);
    yield put(actions.fetchListSuccess(r.data));
}

function* fetchDeleteList(action) {
    const res =  yield call(deleteList, action.payload);
    console.log(res);
}

function* fetchDeleteTask(action) {
    const list = yield call(getOneList, action.payload.idDashboard);
    const res = yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list.data,
            tasks: list.data.tasks.filter(e => e.id !== action.payload.idTask),
        },
    );
    console.log(res);
    const r = yield call(getOneList, action.payload.idDashboard);
    yield put(actions.fetchListSuccess(r.data));
}

export function* saga() {
    yield safeTakeEvery(FETCH_LIST, fetchList);
    yield safeTakeEvery(SEARCH_TASK, fetchChangeSearch);
    yield safeTakeEvery(ADD_TASK_LIST, addTask);
    yield safeTakeEvery(DELETE_LIST, fetchDeleteList);
    yield safeTakeEvery(DELETE_TASK_LIST, fetchDeleteTask);
    yield safeTakeLatest(UPDATE_TASK_LIST, updateTask);
    yield safeTakeLatest(UPDATE_TITLE_LIST, updateTitle);

}