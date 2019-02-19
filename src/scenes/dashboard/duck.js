/* eslint-disable */
import { createAction, handleActions } from 'redux-actions';
import { call, put, select, delay } from 'redux-saga/effects';
import {
    getMyList,
    deleteList,
    addDashboard,
    updateList,
    getSharedLists,
} from '../../api/dashboard';
import {
    updateTask,
    getTasks,
    addTask,
    deleteTask as deleteTaskApi,
} from '../../api/task';
import {safeTakeEvery, safeTakeLatest} from "../../helpers/saga";

export const FETCH_DASHBOARD = 'dashboard/FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'dashboard/FETCH_DASHBOARD_SUCCESS';
export const SEARCH_DASHBOARD = 'dashboard/SEARCH_DASHBOARD';

export const SELECTED_MY_LISTS = 'dashboard/SELECTED_MY_LISTS';
export const SELECTED_SHARED_LISTS = 'dashboard/SELECTED_SHARED_LISTS';

export const ADD_DASHBOARD = 'dashboard/ADD_DASHBOARD';
export const DELETE_DASHBOARD = 'dashboard/DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'dashboard/UPDATE_TITLE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD_SUCCESS = 'dashboard/UPDATE_TITLE_DASHBOARD_SUCCESS';

export const FETCH_TASKS = 'FETCH_TASKS';
export const SET_TASKS_SUCCESS = 'SET_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const actions = {
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    updateSelectedMyLists: createAction(SELECTED_MY_LISTS),
    updateSelectedSharedLists: createAction(SELECTED_SHARED_LISTS),

    searchDashboard: createAction(SEARCH_DASHBOARD),

    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),
    updateTitleSuccess: createAction(UPDATE_TITLE_DASHBOARD_SUCCESS),

    fetchTasks: createAction(FETCH_TASKS),
    setTasksSuccess: createAction(SET_TASKS_SUCCESS),
    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
};


const initialState = {
    // allList: {
    //     myList: [],
    //     sharedList:[],
    // },
    toDoBoard: [],
    tasks: [],
    selectedMy: true,
    selectedShared: false,
};

export const reducer = handleActions({
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => ({ ...state, toDoBoard: action.payload }),

    [SET_TASKS_SUCCESS]: (state, action) => ({ ...state, tasks: action.payload }),

    [UPDATE_TITLE_DASHBOARD]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map((e) => {
            if (e.id === action.payload.id) {
                return { ...e, todoListName: action.payload.newTitle };
            }
            return e;
        }),
    }),

    [UPDATE_CHECKBOX]: (state, action) => Object.assign({}, state, {
        toDoBoard: state.toDoBoard.map(i => (i.id === action.payload.idDashboard
            ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? { ...e, isComplete: !action.payload.selected }
                    : e)),
            } : i)),
    }),

    [UPDATE_TASK_NAME]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (i.id === action.payload.idDashboard
            ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? {
                        ...e, body: action.payload.newTaskName,
                    } : e)),
            } : i)),
    }),

    [SELECTED_MY_LISTS]: (state,action) => ({ ...state, selectedMy: action.payload }),

    [SELECTED_SHARED_LISTS]: (state,action) => ({ ...state, selectedShared: action.payload}),

}, initialState);

function* checkSelectedMy() {
        const selectedMy = yield select(state => state.dashboard.selectedMy);
        // let allLists = yield select(state => state.dashboard.allList);
        const myLists = yield  call(getMyList);
        const res= selectedMy ? myLists.data: [];
        console.log(res);
        yield put(actions.fetchDashboardSuccess(res));
}

function* checkSelectedShared() {
    const selectedShared = yield select(state => state.dashboard.selectedShared);
    // const allLists = yield select(state => state.dashboard.allList);
    const sharedList = yield call(getSharedLists);
    const res = selectedShared ? sharedList.data : [];
    console.log(res);
    yield put(actions.fetchDashboardSuccess(res));
}

function* getDashboard() {
    const res = yield  call(getMyList);
    yield put(actions.fetchDashboardSuccess(res.data));
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(getDashboard);
}

function* updateTitle(action) {
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.id === action.payload.id));
    const updatedList = { ...list, todoListName: list.todoListName === '' ? 'New Title' : list.todoListName };
    yield call(updateList, action.payload.id, updatedList );
    yield call(getDashboard);
}

function* fetchTasks(action) {
    const res = yield call(getTasks, action.payload);
    yield put(actions.setTasksSuccess(res.data));
}

function* updateSelectedTask(action) {
    yield delay(1000);
    yield call(
        updateTask,
        action.payload.idTask,
         !action.payload.selected,
    );
    yield call(getDashboard);
}

function* deleteTask(action) {
    yield call(deleteTaskApi, action.payload.idTask);
    yield call(getTasks);
}

function* addNewTask(action) {
    try{
        yield call(
            addTask,
            action.payload.idDashboard,
            {body: action.payload.nameTask,},
        );
        yield call(getTasks);
    }catch (e) {
        console.log(e)
    }
}

function* addList(action) {
    yield call(addDashboard, action.payload);
    yield call(getDashboard);
}

function* mutate(action) {
    const lists = yield call(getMyList);
    const mutateList = action.payload==='' ?
        lists.data :
        lists.data.filter(list => !list.todoListName.toLowerCase().search(action.payload));
    yield put(actions.fetchDashboardSuccess(mutateList));
}

export function* saga() {
    yield safeTakeEvery(FETCH_DASHBOARD, checkSelectedMy);
    yield safeTakeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield safeTakeEvery(ADD_DASHBOARD, addList);
    yield safeTakeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield safeTakeEvery(FETCH_TASKS, fetchTasks);
    yield safeTakeEvery(DELETE_TASK, deleteTask);
    yield safeTakeEvery(ADD_TASK, addNewTask);
    yield safeTakeLatest(UPDATE_TITLE_DASHBOARD_SUCCESS, updateTitle);
    yield safeTakeEvery(SEARCH_DASHBOARD, mutate);
    yield safeTakeEvery(SELECTED_MY_LISTS, checkSelectedMy);
    yield safeTakeEvery(SELECTED_SHARED_LISTS, checkSelectedShared);
}
