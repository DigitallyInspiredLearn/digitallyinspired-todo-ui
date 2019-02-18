/* eslint-disable */
import { createAction, handleActions } from 'redux-actions';
import {
    takeEvery, call, put, select, takeLatest, delay,
} from 'redux-saga/effects';
import {
    getList, deleteList, addDashboard, updateList, getOneList, getTasks, addTask, deleteTask as deleteTaskApi, updateTask,
} from '../../api/dashboard';

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
    fetchOneDashboardSuccess: createAction(FETCH_ONE_DASHBOARD_SUCCESS),
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),

    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),
    onBlurs: createAction(ON_BLURS),

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

    [FETCH_ONE_DASHBOARD_SUCCESS]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map(i => (i.id === action.payload.idBoard ? i : false)),
    }),

    [FETCH_LIST_SUCCESS]: (state, action) => ({ ...state, data: action.payload }),

    [UPDATE_TITLE_DASHBOARD]: (state, action) => ({
        ...state,
        toDoBoard: state.toDoBoard.map((e) => {
            if (e.id === action.payload.id) {
                return { ...e, todoListName: action.payload.newTitle };
            }
            return e;
        })
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
    const res = yield call(getList);
    yield put(actions.setDashboardSuccess(res.data));
}

function* fetchTasks(action) {
    const res = yield call(getTasks, action.payload);
    yield put(actions.setTasksSuccess(res.data));
}

function* deleteDashboard(action) {
    yield call(deleteList, action.payload.id);
    yield call(getDashboard);
}

function* updateSelectedTask(action) {
    yield delay(1000);
    // const todo = yield select(state => state.dashboard.toDoBoard);
    // const list = todo.find(i => i.id === action.payload.idDashboard);
    console.log(action.payload);
    yield call(
        updateTask,
        action.payload.idTask,
        {
            body: action.payload.body,
            id: action.payload.idTask,
            isComplete: !action.payload.selected
        },
    );
    yield call(getDashboard);
}

function* deleteTask(action) {
    console.log(action)
    // const todo = yield select(state => state.dashboard.toDoBoard);
    // const list = todo.find(i => i.id === action.payload.idDashboard);
    yield call(deleteTaskApi, action.payload.idTask);
    yield call(getDashboard);
}

function* addNewTask(action) {
    console.log(action);
    yield call(
        addTask,
        action.payload.idDashboard,
        {
            id: new Date().valueOf(),
            isComplete: false,
            body: action.payload.nameTask,
        },

    );
    yield call(getDashboard);
}

function* addList(action) {
    yield call(addDashboard, action.payload);
    yield call(getDashboard);
}

function* updateTitle(action) {
    const list = yield select(state => state.dashboard.toDoBoard.find(l => l.id === action.payload.id));
    list.todoListName = list.todoListName === '' ? 'New Title' : list.todoListName;
    list.tasks.map(task => task.body = task.body === '' ? 'to-do' : task.body);
    yield call(updateList, action.payload.id, list);
    yield call(getDashboard);
}

function* mutate(action) {
    const lists = yield call(getList);
    const mutateList = action.payload==='' ?
        lists.data :
        lists.data.filter(list => !list.todoListName.toLowerCase().search(action.payload));
    yield put(actions.setDashboardSuccess(mutateList));
}
export function* saga() {
    yield takeEvery(FETCH_DASHBOARD, getDashboard);
    yield takeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield takeEvery(ADD_DASHBOARD, addList);
    yield takeLatest(UPDATE_CHECKBOX, updateSelectedTask);
    yield takeEvery(FETCH_TASKS, fetchTasks);
    yield takeEvery(DELETE_TASK, deleteTask);
    yield takeEvery(ADD_TASK, addNewTask);
    yield takeLatest(ON_BLURS, updateTitle);
    yield takeEvery(SEARCH_LIST, mutate);
}
