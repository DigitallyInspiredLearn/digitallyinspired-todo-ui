/* eslint-disable */
import { createAction, handleActions } from 'redux-actions';
import { call, put, select, delay } from 'redux-saga/effects';
import {
    getMyList,
    deleteList,
    addDashboard,
    updateList,
    getSharedLists,
    getAllLists,
    deleteTask as deleteTaskApi, 
    updateTask
} from '../../api/dashboard';
import {
    updateTask,
    getTasks,
    addTask,
    deleteTask as deleteTaskApi,
} from '../../api/task';
import {safeTakeEvery, safeTakeLatest} from "../../helpers/saga";

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const SET_DASHBOARD_SUCCESS = 'SET_DASHBOARD_SUCCESS';

export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD_SUCCESS = 'UPDATE_TITLE_DASHBOARD_SUCCESS';

export const FETCH_TASKS = 'FETCH_TASKS';
export const SET_TASKS_SUCCESS = 'SET_TASKS_SUCCESS';
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const SEARCH_LIST = 'SEARCH_LIST';

export const actions = {
    fetchDashboard: createAction(FETCH_DASHBOARD),
    setDashboardSuccess: createAction(SET_DASHBOARD_SUCCESS),
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

    searchList: createAction(SEARCH_LIST),
};


const initialState = {
    toDoBoard: [],
    tasks: [],
};

export const reducer = handleActions({
    [SET_DASHBOARD_SUCCESS]: (state, action) => ({ ...state, toDoBoard: action.payload }),

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

}, initialState);

function* getDashboard() {

    let res = yield call(getMyList);
    console.log(res);
    // let myList = yield call(getMyList);
    // let sharedList = yield call(getSharedLists);
    // action.payload.selectedMy==='myList' ? res =  {...res, myList}: -1;
    // action.payload.selectedShared==='sharedList' ? res =  {...res, sharedList} :-1;
    yield put(actions.setDashboardSuccess(res.data));
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
    yield put(actions.setDashboardSuccess(mutateList));
}
export function* saga() {
    yield safeTakeEvery(FETCH_DASHBOARD, getDashboard);
    yield safeTakeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield safeTakeEvery(ADD_DASHBOARD, addList);
    yield safeTakeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield safeTakeEvery(FETCH_TASKS, fetchTasks);
    yield safeTakeEvery(DELETE_TASK, deleteTask);
    yield safeTakeEvery(ADD_TASK, addNewTask);
    yield safeTakeLatest(UPDATE_TITLE_DASHBOARD_SUCCESS, updateTitle);
    yield safeTakeEvery(SEARCH_LIST, mutate);
}
