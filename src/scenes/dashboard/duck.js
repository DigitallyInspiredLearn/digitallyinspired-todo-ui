/* eslint-disable */
import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put, select, takeLatest, delay,
} from 'redux-saga/effects';
import {
    getList, deleteList, addDashboard, updateList, getOneList,
} from '../../api/dashboard';

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const FETCH_ONE_DASHBOARD_SUCCESS = 'FETCH_ONE_DASHBOARD_SUCCESS';
export const FETCH_LIST = 'list/FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'list/FETCH_LIST_SUCCESS';

export const ADD_DASHBOARD = 'ADD_DASHBOARD ';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';
export const ON_BLURS = 'ON_BLURS';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const actions = {
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    fetchOneDashboardSuccess: createAction(FETCH_ONE_DASHBOARD_SUCCESS),
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),

    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),
    onBlurs: createAction(ON_BLURS),

    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
};

const initialState = {
    toDoBoard: [],
};
export const reducer = handleActions({
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => ({ ...state, toDoBoard: action.payload }),

    [FETCH_ONE_DASHBOARD_SUCCESS]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (i.idList === action.payload.idBoard ? i : false)),
    }),

    [FETCH_LIST_SUCCESS]: (state, action) => ({ ...state, data: action.payload }),

    [UPDATE_TITLE_DASHBOARD]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map((e) => {
            if (e.idList === action.payload.id) {
                return { ...e, title: action.payload.newTitle };
            }
            return e;
        }),
    }),
    [UPDATE_CHECKBOX]: (state, action) => Object.assign({}, state, {
        toDoBoard: state.toDoBoard.map(i => (i.idList === action.payload.idDashboard
            ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? { ...e, selected: !action.payload.selected }
                    : e)),
            } : i)),
    }),

    [UPDATE_TASK_NAME]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (i.idList === action.payload.idDashboard
            ? {
                ...i,
                tasks: i.tasks.map(e => (e.id === action.payload.idTask
                    ? {
                        ...e, name: action.payload.newTaskName,
                    } : e)),
            } : i)),
    }),
}, initialState);

function* getDashboard() {
    const res = yield call(getList);
    yield put(actions.fetchDashboardSuccess(res.data));
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(getDashboard);
}

function* updateSelectedTask(action) {
    yield delay(1000);
    const todo = yield select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list,
            tasks: list.tasks.map(e => (e.id === action.payload.idTask ? {
                ...e,
                selected: !action.payload.selected,
            } : e)),
        },
    );
    yield call(getDashboard);
}

function* deleteTask(action) {
    const todo = yield select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list,
            tasks: list.tasks.filter(e => e.id !== action.payload.idTask),
        },
    );
    yield call(getDashboard);
}

function* addTask(action) {
    const todo = yield select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list,
            tasks:
                [
                    ...list.tasks,
                    {
                        id: action.payload.idTask,
                        selected: false,
                        name: action.payload.nameTask,
                    },
                ],
        },
    );
    yield call(getDashboard);
}

function* addList(action) {
    console.log(action);
    // yield call(addDashboard, action.payload);
    // yield call(getDashboard);
}

function* update(action) {
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.idList === action.payload.id));
    list.title = list.title === '' ? 'New Title' : list.title;
    list.tasks.map(task => task.name = task.name === '' ? 'to-do' : task.name);
    yield call(updateList, action.payload.id, list);
}

function* fetchList(action) {
    const r = yield call(getOneList, action.payload);
    yield put(actions.fetchListSuccess(r.data));
}

export function* saga() {
    yield takeEvery(FETCH_DASHBOARD, getDashboard);
    yield takeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield takeEvery(ADD_DASHBOARD, addList);
    yield takeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield takeEvery(DELETE_TASK, deleteTask);
    yield takeEvery(ADD_TASK, addTask);
    yield takeLatest(ON_BLURS, update);
    yield takeEvery(FETCH_LIST, fetchList);
}
