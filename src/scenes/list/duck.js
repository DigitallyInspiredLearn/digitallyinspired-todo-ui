import { createAction, handleActions } from 'redux-actions';
import {
    call, put, select, delay,
} from 'redux-saga/effects';
import getOneList from '../../api/list';
import { updateList, deleteList } from '../../api/dashboard';
import { addTask, deleteTask, updateTask } from '../../api/task';
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
export const UPDATE_CHECKBOX_LIST = 'list/UPDATE_CHECKBOX_LIST';
export const SELECTED_DONE = 'list/SELECTED_DONE';
export const SELECTED_NOT_DONE = 'list/SELECTED_NOT_DONE';
export const MUTATE = 'list/MUTATE';
export const MUTATE_SUCCESS = 'list/MUTATE_SUCCESS';

export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
    changeSearch: createAction(SEARCH_TASK),
    updateTitleList: createAction(UPDATE_TITLE_LIST),
    updateTaskList: createAction(UPDATE_TASK_LIST),
    updateCheckboxList: createAction(UPDATE_CHECKBOX_LIST),
    changeListSuccess: createAction(FETCH_CHANGE_LIST_SUCCESS),
    addTaskList: createAction(ADD_TASK_LIST),
    deleteList: createAction(DELETE_LIST),
    deleteTaskList: createAction(DELETE_TASK_LIST),
    selectDoneAction: createAction(SELECTED_DONE),
    selectedNotDoneAction: createAction(SELECTED_NOT_DONE),
    mutate: createAction(MUTATE),
    mutateSuccess: createAction(MUTATE_SUCCESS),
};

const initialState = {
    data: {},
    dataRaw: {},
    search: '',
    selectedDone: true,
    selectedNotDone: true,
};

export const getList = state => state.list;

export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => ({ ...state, data: action.payload }),

    [FETCH_CHANGE_LIST_SUCCESS]: (state, action) => ({ ...state, data: action.payload }),

    [UPDATE_TITLE_LIST]: (state, action) => ({
        ...state,
        data: { ...state.data, todoListName: action.payload.newTitle },
    }),

    [UPDATE_TASK_LIST]: (state, action) => ({
        ...state,
        data: {
            ...state.data,
            tasks: state.data.tasks.map(e => (e.id === action.payload.idTask
                ? {
                    ...e, body: action.payload.newTaskName,
                } : e)),
        },
    }),

    [UPDATE_CHECKBOX_LIST]: (state, action) => ({
        ...state,
        data: {
            ...state.data,
            tasks: state.data.tasks.map(e => (e.id === action.payload.idTask
                ? {
                    ...e, isComplete: !action.payload.selected,
                } : e)),
        },
    }),

    [SEARCH_TASK]: (state, action) => ({ ...state, search: action.payload }),
    [SELECTED_DONE]: (state, action) => ({ ...state, selectedDone: !action.payload.done }),
    [SELECTED_NOT_DONE]: (state, action) => ({ ...state, selectedNotDone: !action.payload.notDone }),

}, initialState);


export function* fetchList(action) {
    const { selectedDone, selectedNotDone } = yield select(getList);
    const r = yield call(getOneList, action.payload.idList);
    (selectedDone && selectedNotDone) ? yield put(actions.fetchListSuccess(r.data))
        : selectedDone ? yield put(actions.fetchListSuccess({
            ...r.data,
            tasks: r.data.tasks.filter(task => task.isComplete === true),
        })) : selectedNotDone ? yield put(actions.fetchListSuccess({
            ...r.data,
            tasks: r.data.tasks.filter(task => task.isComplete === false),
        })) : yield put(actions.fetchListSuccess({}));
}

export function* updateTitle(action) {
    yield delay(1000);
    const list = yield call(getOneList, action.payload.idDashboard);
    yield call(updateList, action.payload.idDashboard, { ...list.data, todoListName: action.payload.newTitle });
}

export function* fetchUpdateTask(action) {
    yield delay(1000);
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.newTaskName,
        isComplete: action.payload.selected,
    });
    const r = yield call(getOneList, action.payload.idDashboard);
    yield put(actions.fetchListSuccess(r.data));
}

export function* fetchChangeSearch(action) {
    const list = yield call(getOneList, action.payload.idDashboard);
    const mutateTask = action.payload.search === '' ? actions.fetchListSuccess(list.data)
        : actions.changeListSuccess({
            ...list.data,
            tasks: list.data.tasks.filter(i => i.body.indexOf(action.payload.search) >= 0),
        });
    yield put(mutateTask);
}

export function* addNewTask(action) {
    yield call(addTask, action.payload.idDashboard, { body: action.payload.nameTask, isComplete: false });
    const r = yield call(getOneList, action.payload.idDashboard);
    yield put(actions.fetchListSuccess(r.data));
}

export function* fetchDeleteList(action) {
    yield call(deleteList, action.payload.idDashboard);
}

export function* fetchDeleteTask(action) {
    yield call(getOneList, action.payload.idDashboard);
    yield call(deleteTask, action.payload.idTask);
    const r = yield call(getOneList, action.payload.idDashboard);
    yield put(actions.fetchListSuccess(r.data));
}

export function* fetchUpdateCheckbox(action) {
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.nameTask,
        isComplete: !action.payload.selected,
    });
    const r = yield call(getOneList, action.payload.idDashboard);
    yield put(actions.fetchListSuccess(r.data));
}

export function* saga() {
    yield safeTakeEvery([FETCH_LIST, SELECTED_NOT_DONE, SELECTED_DONE], fetchList);
    yield safeTakeEvery(SEARCH_TASK, fetchChangeSearch);
    yield safeTakeEvery(ADD_TASK_LIST, addNewTask);
    yield safeTakeEvery(DELETE_LIST, fetchDeleteList);
    yield safeTakeEvery(DELETE_TASK_LIST, fetchDeleteTask);
    yield safeTakeEvery(UPDATE_CHECKBOX_LIST, fetchUpdateCheckbox);
    yield safeTakeLatest(UPDATE_TASK_LIST, fetchUpdateTask);
    yield safeTakeLatest(UPDATE_TITLE_LIST, updateTitle);
}
