/* eslint-disable */
import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put, select, takeLatest, delay,
} from 'redux-saga/effects';
import {
    getMyList,
    deleteList,
    addDashboard,
    updateList,
    getOneList,
    getSharedLists,
    getAllLists
} from '../../api/dashboard';
import {
    updateTask,
    getTasks,
    addTask,
    deleteTask as deleteTasks,
} from '../../api/task';
import {safeTakeEvery, safeTakeLatest} from "../../helpers/saga";

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const SET_DASHBOARD_SUCCESS = 'SET_DASHBOARD_SUCCESS';
export const FETCH_ONE_DASHBOARD_SUCCESS = 'FETCH_ONE_DASHBOARD_SUCCESS';
export const FETCH_LIST = 'list/FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'list/FETCH_LIST_SUCCESS';

export const ADD_DASHBOARD = 'ADD_DASHBOARD';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';
export const ON_BLURS = 'ON_BLURS';

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
    onBlurs: createAction(ON_BLURS),

    fetchOneDashboardSuccess: createAction(FETCH_ONE_DASHBOARD_SUCCESS),
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),

    fetchTasks: createAction(FETCH_TASKS),
    setTasksSuccess: createAction(SET_TASKS_SUCCESS),
    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),

    searchList: createAction(SEARCH_LIST),
};

function* getDashboard(action) {
    let res = yield call(getMyList);
    // let myList = yield call(getMyList);
    // let sharedList = yield call(getSharedLists);
    // action.payload.selectedMy==='myList' ? res =  {...res, myList}: -1;
    // action.payload.selectedShared==='sharedList' ? res =  {...res, sharedList} :-1;
    yield put(actions.setDashboardSuccess(res.data));
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(getDashboard,'myList');
}

function* updateTitle(action) {
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.id === action.payload.id));
    const updatedList = { ...list, todoListName: list.todoListName === '' ? 'New Title' : list.todoListName };
    yield call(updateList, action.payload.id, updatedList );
    yield call(getDashboard, 'myList');
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
    yield call(deleteTasks, action.payload.idTask);
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
    yield call(getDashboard, 'myList');
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
    yield safeTakeLatest(ON_BLURS, updateTitle);
    yield safeTakeEvery(SEARCH_LIST, mutate);
}
