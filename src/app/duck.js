import {createAction, handleActions} from 'redux-actions'
import {takeEvery, call, put, select} from 'redux-saga/effects'
import {getList, deleteList, addDashboard, updateList, getOneList} from "./axios";

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

        return {...state, toDoBoard: state.toDoBoard.map( (i) => {
                    if(i.idList===action.payload.idBoard){
                        console.log(i)
                        return i;
                    }
            })}
    },

    [ADD_DASHBOARD]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: [
                ...state.toDoBoard,
                {
                    idList: action.payload.idBoard,
                    title: action.payload.title,
                    tasks: [{
                        name: action.payload.taskName,
                        id: action.payload.idTask,
                        selected: false,
                    }]
                }
            ]
        });
    },

    [DELETE_DASHBOARD]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.filter(e => {
                console.log(e.idList, action.payload.id);
                return e.idList !== action.payload.id;
            })
        })
    },

    [UPDATE_TITLE_DASHBOARD]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(e => {
                if (e.idList === action.payload.id) {
                    return {...e, title: action.payload.newTitle}
                }
                return e;
            })
        });
    },

    [ADD_TASK]: (state, action) => {
        return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        {
                            ...i, tasks:
                                [...i.tasks,
                                    {
                                        id: action.payload.idTask,
                                        selected: false,
                                        name: action.payload.nameTask
                                    }
                                ]
                        } : i)
            }
        );
    },

    [DELETE_TASK]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    {...i, tasks: i.tasks.filter(e => e.id !== action.payload.idTask)}
                    : i)
        });
    },

    [UPDATE_CHECKBOX]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    {
                        ...i, tasks: i.tasks.map(e => e.id === action.payload.idTask ?
                            {...e, selected: !action.payload.selected}
                            : e)
                    } : i)
        });
    },

    [UPDATE_TASK_NAME]: (state, action) => {
        return {
            ...state,
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    {
                        ...i, tasks: i.tasks.map(e =>
                            e.id === action.payload.idTask ?
                                {
                                    ...e, name: action.payload.newTaskName
                                } : e)
                    } : i
            )
        }
    },

}, initialState);

function* getDashboard() {
    const responce = yield call(getList);
    yield put(actions.fetchDashboardSuccess(responce.data))
}

function* deleteDashboard(action) {

    yield call(deleteList,action.payload.id);
    yield call(getDashboard)
}

function* updTitle(action) {
    const todo = yield  select(state => state.toDoBoard);
    const list = todo.find(i => i.idList===action.payload.id);
    yield call(updateList, action.payload.id, {...list, title: action.payload.newTitle});
    yield call(getDashboard)
}

function* addList(action) {
    yield call(addDashboard,  action.payload );
    yield call(getDashboard)
}
function* getOneDashboard(action) {
    yield call(getOneList,  action.payload );
    console.log(call(getOneList,  action.payload ))
}
export function* saga() {
    yield takeEvery(FETCH_DASHBOARD, getDashboard);
    yield takeEvery(FETCH_ONE_DASHBOARD_SUCCESS, getOneDashboard);
    yield takeEvery(DELETE_DASHBOARD, deleteDashboard);
    yield takeEvery(ADD_DASHBOARD,addList);
    yield takeEvery(UPDATE_TITLE_DASHBOARD,updTitle);
}
