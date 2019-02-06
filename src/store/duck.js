import { createAction, handleActions } from 'redux-actions';
import { call, put,select, takeLatest } from 'redux-saga/effects';
import { generateId } from '.././helper'
import { getList, addList, deleteList, updateList, getListById } from '../api/lists'

export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const FETCH_BOARD = 'FETCH_BOARD';
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const CHANGE_DASHBOARD_TITLE = 'CHANGE_DASHBOARD_TITLE';
export const ADD_TASK = 'ADD_TASK';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const DELETE_TASK = 'DELETE_TASK';
export const CHANGE_TASK_NAME = 'CHANGE_TASK_NAME';
export const CHANGE_TASK_SELECTED = 'CHANGE_TASK_SELECTED';
export const ADD_LIST = 'ADD_LIST';
export const DELETE_LIST = 'DELETE_LIST';
export const ADD_DASHBOARD = 'ADD_DASHBOARD';

export const INPUT_TITLE_TEXT = 'INPUT_TITLE_TEXT';
export const INPUT_TASK_TEXT = 'INPUT_TASK_TEXT';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const HIDE_SIDEBAR = 'HIDE_SIDEBAR';

export const actions = {
    fetchList: createAction(FETCH_LIST),
    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),
    fetchBoard: createAction(FETCH_BOARD),
    fetchBoardSuccess: createAction(FETCH_BOARD_SUCCESS),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    changeDashboardTitle: createAction(CHANGE_DASHBOARD_TITLE),
    addList: createAction(ADD_LIST),
    deleteList: createAction(DELETE_LIST),
    addTask: createAction(ADD_TASK),
    changeTaskName: createAction(CHANGE_TASK_NAME),
    deleteTask: createAction(DELETE_TASK),
    addDashboard: createAction(ADD_DASHBOARD),
    changeTaskSelected: createAction(CHANGE_TASK_SELECTED),

    showSidebar: createAction(SHOW_SIDEBAR),
    hideSidebar: createAction(HIDE_SIDEBAR),
    addInputTitle: createAction(INPUT_TITLE_TEXT),
    addInputTask: createAction(INPUT_TASK_TEXT)
};

export const initialState = {
    data: [],
    oneList: {},
    inputTitle: '',
    inputTask: '',
    className: 'block-add'
};

export const reducer = handleActions({

    [FETCH_LIST_SUCCESS]: (state, action) => {
        return {...state, data: action.payload}
    },

    [FETCH_BOARD_SUCCESS]: (state, action) => {
        return {...state, oneList: action.payload}
    },

    [DELETE_DASHBOARD]: (state, action) => {
        return {...state, data: state.data.filter(item => item.dashboard_id !== action.payload)}
    },

    [CHANGE_DASHBOARD_TITLE]: (state, action) => {
        return { ...state, data: state.data.map(i => 
            i.dashboard_id === action.payload.id ? { ...i, title: action.payload.newTitle } : i)
        }
    },

    [ADD_TASK]: (state, action) => {
        let newTask =
            {
                task_id: generateId(),
                selected: false,
                name: action.payload.task
            };
        return {
            ...state, data: state.data.map(item =>
                item.dashboard_id === action.payload.id ? {...item, tasks: [...item.tasks, newTask]} : item)
        }
    },

    [CHANGE_TASK_NAME]: (state, action) => {
        return {...state, data: state.data.map(item => {
              if (item.dashboard_id === action.payload.dashboard_id) {
                item.tasks = item.tasks.map(task => {
                  if (task.task_id === action.payload.task_id) {
                    return {...task, name: action.payload.name}
                  }
                  return task;
                })
              }
              return item;
            })
        };
    },

    [DELETE_TASK]: (state, action) => {
        return { ...state, data: state.data.map(item => {
                if (item.dashboard_id === action.payload.dashboard_id) {
                    return {...item, tasks: item.tasks.filter(task => task.task_id !== action.payload.task_id)}
                }
                return item
            })
        }
    },

    [CHANGE_TASK_SELECTED]: (state, action) => {
        return {...state, data: state.data.map(item => {
              if (item.dashboard_id === action.payload.dashboard_id) {
                item.tasks = item.tasks.map(task => {
                  if (task.task_id === action.payload.task_id) {
                    return {...task, selected: action.payload.selected}
                  }
                  return task;
                })
              }
              return item;
            })
          }
    },

     [ADD_DASHBOARD]: (state, action) => {

         let newDashboard = {
             title: action.payload.addTitle,
             tasks: [
                 {
                     name: action.payload.addTask,
                     selected: false,
                 }
             ],
         }

        //console.log(newDashboard)
    
        return {
             data: [...state.data, newDashboard]
        }
     },


    [SHOW_SIDEBAR]: (state, action) => {
        return {...state, className: "block-add current"}
    },

    [HIDE_SIDEBAR]: (state, action) => {
        return {...state, className: "block-add"}
    },

    [INPUT_TITLE_TEXT]: (state, action) => {
        return {...state, inputTitle: action.payload}
    },

    [INPUT_TASK_TEXT]: (state, action) => {
        return {...state, inputTask: action.payload}
    }
}, initialState);

function* func_getList() {
    console.log("getList");
    const response = yield call(getList);
    console.log(response.data)
    yield put(actions.fetchListSuccess(response.data));
}

function* func_addList(action){
    console.log("addList");

    let newDashboard = {
        title: action.payload.addTitle,
        tasks: [
            {
                task_id: '',
                name: action.payload.addTask,
                selected: false,
            }
        ],
    }
    console.log(newDashboard)
    yield call(addList, newDashboard);
    yield call(func_getList);
}

function* func_deleteList(action){
    console.log("deleteList");
    console.log(action.payload)
    yield call(deleteList, action.payload);
    //yield call(func_getList)
}


function* func_updateList(action){
    const array = yield select(state => state.data);
    console.log(array)
    const list = array.find(item => item.dashboard_id === action.payload.id);
    console.log(list)
    yield call(updateList, action.payload.id, {...list, title: action.payload.newTitle});
    //yield call(func_getList)
}

function* func_getBoard(action){
    console.log("getBoard");
    console.log(action)
    const response = yield call(getListById, action.payload);
    //console.log(response.data)
    yield put(actions.fetchBoardSuccess(response.data));
}

export function* saga() {
    yield takeLatest(FETCH_LIST, func_getList);
    yield takeLatest(ADD_DASHBOARD, func_addList);
    yield takeLatest(DELETE_DASHBOARD, func_deleteList);
    yield takeLatest(CHANGE_DASHBOARD_TITLE, func_updateList);
    yield takeLatest(FETCH_BOARD, func_getBoard);
}