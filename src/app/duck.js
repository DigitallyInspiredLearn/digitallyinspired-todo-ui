import {createAction, handleActions} from 'redux-actions'
import {takeEvery, call, put, select} from 'redux-saga/effects'
import {getList, deleteList, addDashboard, updateList} from "../config/axios";

export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';
export const FETCH_ONE_DASHBOARD_SUCCESS = 'FETCH_ONE_DASHBOARD_SUCCESS';

export const ADD_DASHBOARD = 'ADD_DASHBOARD ';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const actions = {
    fetchDashboard: createAction(FETCH_DASHBOARD),
    fetchDashboardSuccess: createAction(FETCH_DASHBOARD_SUCCESS),
    fetchOneDashboardSuccess: createAction(FETCH_ONE_DASHBOARD_SUCCESS),

    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),

    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
};

const initialState = {
    toDoBoard: []
};
export const reducer = handleActions({
    [FETCH_DASHBOARD_SUCCESS]: (state, action) => {
        return {...state, toDoBoard: action.payload}
    },

    [FETCH_ONE_DASHBOARD_SUCCESS]: (state, action) => {
        return { ...state, toDoBoard: state.toDoBoard.map((i) =>
                i.idList === action.payload.idBoard ? i : false
            )
        }
    },
}, initialState);

function* getDashboard() {
    const  res = yield call(getList);
    yield put(actions.fetchDashboardSuccess(res.data))
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(getDashboard)
}

function* updTitle(action) {
    const todo = yield  select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.id);
    let value = action.payload.newTitle === '' ?
        action.payload.newTitle = 'NewTitle' :
        action.payload.newTitle;
    yield call(updateList, action.payload.id, {...list, title: value});
    yield call(getDashboard)
}

function* updateNameTask(action) {
    const todo = yield  select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {...list, tasks: list.tasks.map(e =>
            e.id === action.payload.idTask ? {...e, name: action.payload.newTaskName} : e)
    });
    yield call(getDashboard);
}

function* updateSelectedTask(action) {
    const todo = yield  select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {...list, tasks: list.tasks.map(e =>
            e.id === action.payload.idTask ? {...e, selected: !action.payload.selected} : e)
    });
    yield call(getDashboard);
}

function* deleteTask(action) {
    const todo = yield  select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {
            ...list,
            tasks: list.tasks.filter(e =>
                e.id !== action.payload.idTask)
        });
    yield call(getDashboard);
}

function* addTask(action) {
    const todo = yield  select(state => state.dashboard.toDoBoard);
    const list = todo.find(i => i.idList === action.payload.idDashboard);
    yield call(
        updateList,
        action.payload.idDashboard,
        {...list, tasks:
                [
                    ...list.tasks,
                    {
                        id: action.payload.idTask,
                        selected: false,
                        name: action.payload.nameTask
                    }
                ]
        }
    );
    yield call(getDashboard);
}

function* addList(action) {
    yield call(addDashboard, action.payload);
    yield call(getDashboard)
}

export function* saga() {
    yield takeEvery(FETCH_DASHBOARD, getDashboard);
    yield takeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield takeEvery(ADD_DASHBOARD, addList);
    yield takeEvery(UPDATE_TITLE_DASHBOARD, updTitle);
    yield takeEvery(UPDATE_TASK_NAME, updateNameTask);
    yield takeEvery(UPDATE_CHECKBOX, updateSelectedTask);
    yield takeEvery(DELETE_TASK, deleteTask);
    yield takeEvery(ADD_TASK, addTask);
}