/* eslint-disable no-use-before-define */
import { createAction, handleActions } from 'redux-actions';
import {
    call, put, select, delay,
} from 'redux-saga/effects';
import {
    getMyList,
    deleteList,
    addDashboard,
    updateList,
    getSharedLists,
    shareTodoListToUser,
} from '../../api/dashboard';
import {
    updateTask,
    addTask,
    deleteTask as deleteTaskApi,
} from '../../api/task';
import { safeTakeEvery, safeTakeLatest } from '../../helpers/saga';

export const FETCH_DASHBOARD = 'dashboard/FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'dashboard/FETCH_DASHBOARD_SUCCESS';

export const FETCH_MY_LISTS_SUCCESS = 'dashboard/FETCH_MY_LISTS_SUCCESS';
export const FETCH_SHARED_LISTS_SUCCESS = 'dashboard/FETCH_SHARED_LISTS_SUCCESS';

export const SELECTED_MY_LISTS = 'dashboard/SELECTED_MY_LISTS';
export const SELECTED_SHARED_LISTS = 'dashboard/SELECTED_SHARED_LISTS';

export const ADD_DASHBOARD = 'dashboard/ADD_DASHBOARD';
export const DELETE_DASHBOARD = 'dashboard/DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'dashboard/UPDATE_TITLE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD_SUCCESS = 'dashboard/UPDATE_TITLE_DASHBOARD_SUCCESS';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const UPDATE_TASK_NAME_SUCCESS = 'UPDATE_TASK_NAME_SUCCESS';
export const DELETE_TASK = 'DELETE_TASK';

export const SEARCH_DASHBOARD = 'dashboard/SEARCH_DASHBOARD';
export const MUTATE_DASHBOARD = 'dashboard/MUTATE_DASHBOARD';

export const SHARE_LIST = 'dashboard/SHARE_LIST';

export const actions = {
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    updateSelectedMyLists: createAction(SELECTED_MY_LISTS),
    updateSelectedSharedLists: createAction(SELECTED_SHARED_LISTS),
    fetchMyListsSuccess: createAction(FETCH_MY_LISTS_SUCCESS),
    fetchSharedListsSuccess: createAction(FETCH_SHARED_LISTS_SUCCESS),
    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),
    updateTitleSuccess: createAction(UPDATE_TITLE_DASHBOARD_SUCCESS),
    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
    updateTaskNameSuccess: createAction(UPDATE_TASK_NAME_SUCCESS),
    searching: createAction(SEARCH_DASHBOARD),
    mutateDashboard: createAction(MUTATE_DASHBOARD),
    shareList: createAction(SHARE_LIST),
};


const initialState = {
    myList: [],
    sharedList: [],
    toDoBoard: [],
    selectedMy: true,
    selectedShared: false,
    searchDashboards: '',
};

export const reducer = handleActions({
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => ({ ...state, toDoBoard: action.payload }),
    [FETCH_MY_LISTS_SUCCESS]: (state, action) => ({ ...state, myList: action.payload }),
    [FETCH_SHARED_LISTS_SUCCESS]: (state, action) => ({ ...state, sharedList: action.payload }),

    [UPDATE_TITLE_DASHBOARD]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(e => (e.id === action.payload.id
            ? { ...e, todoListName: action.payload.newTitle } : e)),
    }),
    [UPDATE_CHECKBOX]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (
            i.id === action.payload.idDashboard ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? { ...e, isComplete: !action.payload.selected } : e)),
            } : i
        )),
    }),
    [UPDATE_TASK_NAME]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (
            i.id === action.payload.idDashboard ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? { ...e, body: action.payload.newTaskName } : e)),
            } : i
        )),
    }),

    [SELECTED_MY_LISTS]: (state, action) => ({ ...state, selectedMy: action.payload }),
    [SELECTED_SHARED_LISTS]: (state, action) => ({ ...state, selectedShared: action.payload }),
    [SEARCH_DASHBOARD]: (state, action) => ({ ...state, searching: action.payload }),
    [MUTATE_DASHBOARD]: (state, action) => ({ ...state, mutateData: action.payload }),
}, initialState);

function* fetchAllLists() {
    const { selectedMy, selectedShared } = yield select(state => state.dashboard);
    const myLists = selectedMy ? (yield call(getMyList)).data : [];
    yield put(actions.fetchMyListsSuccess(myLists));
    const sharedLists = selectedShared
        ? (yield call(getSharedLists)).data.map(l => ({ ...l, shared: true }))
        : [];
    yield put(actions.fetchSharedListsSuccess(sharedLists));
    const allList = myLists.concat(sharedLists);
    yield put(actions.fetchDashboardSuccess(allList));
    // yield call(mutate);
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(fetchAllLists);
}

function* updateTitle(action) {
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.id === action.payload.id));
    const updatedList = { ...list, todoListName: list.todoListName === '' ? 'New Title' : list.todoListName };
    yield call(updateList, action.payload.id, updatedList);
    yield call(fetchAllLists);
}

function* updateSelectedTask(action) {
    yield delay(150);
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.nameTask,
        isComplete: !action.payload.selected,
    });
    yield call(fetchAllLists);
}

function* updateNameTask(action) {
    yield call(updateTask, action.payload.idTask, {
        body: action.payload.newTaskName,
        isComplete: action.payload.selected,
    });
    yield call(fetchAllLists);
}

function* deleteTask(action) {
    yield call(deleteTaskApi, action.payload.idTask);
    yield call(fetchAllLists);
}

function* addNewTask(action) {
    console.log(action);
    yield call(addTask, action.payload.idDashboard, { body: action.payload.nameTask });
    yield call(fetchAllLists);
}

function* addList(action) {
    console.log(action.payload);
    yield call(addDashboard, action.payload);
    yield call(fetchAllLists);
}

function* mutate(action) {
    const my = yield select(state => state.dashboard.myList);
    const shared = yield select(state => state.dashboard.sharedList);
    const allList = my.concat(shared).filter(list => list.todoListName.toLowerCase().includes(
        action.payload.searchDashboards.toLowerCase(),
    ));
    yield put(actions.fetchDashboardSuccess(allList));
}

function* shareList(action) {
    yield call(shareTodoListToUser, action.payload.idList, action.payload.userName);
    yield call(fetchAllLists);
}

export function* saga() {
    yield safeTakeEvery([FETCH_DASHBOARD, SELECTED_MY_LISTS, SELECTED_SHARED_LISTS], fetchAllLists);
    yield safeTakeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield safeTakeEvery(ADD_DASHBOARD, addList);
    yield safeTakeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield safeTakeEvery(DELETE_TASK, deleteTask);
    yield safeTakeEvery(ADD_TASK, addNewTask);
    yield safeTakeLatest(UPDATE_TITLE_DASHBOARD_SUCCESS, updateTitle);
    yield safeTakeLatest(UPDATE_TASK_NAME_SUCCESS, updateNameTask);
    yield safeTakeEvery(SEARCH_DASHBOARD, mutate);
    yield safeTakeEvery(SHARE_LIST, shareList);
}
