import {createAction, handleActions} from 'redux-actions';
import {takeEvery, call, put} from 'redux-saga/effects';
import {getList, addBox, deleteBox, getOneList} from "./store/lists";


export const FETCH_LIST = 'FETCH_LIST';
export const FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS';
export const DASHBOARD_TITLE = 'DASHBOARD_TITLE';
export const ADD_TO_D0 = 'ADD_TO_D0';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_ACTIVE_CHECK = 'TOGGLE_ACTIVE_CHECK';
export const ADD_NEW_DASHBOARD = 'ADD_NEW_DASHBOARD';
export const INFO_ABOUT_LIST = 'INFO_ABOUT_LIST';
export const FETCH_ONE_LIST = 'FETCH_ONE_LIST';


export const NEW_DASHBOARD_TITLE_TEXT = 'NEW_DASHBOARD_TITLE_TEXT';
export const NEW_DASHBOARD_TASK_TEXT = 'NEW_DASHBOARD_TASK_TEXT';
export const SHOW_SIDEBAR = 'SHOW_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';


const generateId = () => {
    return Math.floor(Math.random() * 100000);
};

export const actions = {
    fetchList: createAction(FETCH_LIST),

    fetchOneList: createAction(FETCH_ONE_LIST),

    fetchListSuccess: createAction(FETCH_LIST_SUCCESS),

    infoAboutList:  createAction(INFO_ABOUT_LIST),

    deleteDashboard: createAction(DELETE_DASHBOARD),

    deleteTask: createAction(DELETE_TASK),

    changeTitle: createAction(DASHBOARD_TITLE),

    addTask: createAction(ADD_TO_D0),

    addNewDashboard: createAction(ADD_NEW_DASHBOARD),

    toggleActive: createAction(TOGGLE_ACTIVE_CHECK),

    showSidebar: createAction(SHOW_SIDEBAR),

    closeSidebar: createAction(CLOSE_SIDEBAR),

    changeTitles: createAction(NEW_DASHBOARD_TITLE_TEXT),

    changeTask: createAction(NEW_DASHBOARD_TASK_TEXT)
};

const initialState = {
    data: [
    ],
    myList: {},
    inputTitle: '',
    inputTask: '',
    display: false
};

export const reducer = handleActions({
    [FETCH_LIST_SUCCESS]: (state, action) => {
        console.log(action.payload);
        return {...state, data: action.payload}
    },

    [FETCH_ONE_LIST]: (state, action) => {
        console.log(action.payload);
        return {...state, myList: action.payload}
    },

    [DELETE_DASHBOARD]: (state, action) => {
        return {...state, data: state.data.filter(item => item.idList !== action.payload)}
    },

    [DELETE_TASK]: (state, action) => {
        return {
            ...state, data: state.data.map(item => {
                if (item.idList === action.payload.idBox) {
                    return {...item, tasks: item.tasks.filter(itemTask => itemTask.id !== action.payload.idTask)}
                }
                return item
            })
        }
    },

    [DASHBOARD_TITLE]: (state, action) => {
        return {
            ...state, data: state.data.map(item =>
                item.idList === action.payload.id ? {...item, title: action.payload.newValue} : item)
        }
    },

    [ADD_TO_D0]: (state, action) => {
        let newTask =
            {
                selected: false,
                name: action.payload.newValue
            };
        return {
            ...state, data: state.data.map(item =>
                item.idList === action.payload.idBox ? {...item, tasks: [...item.tasks, newTask]} : item)
        }
    },

    [TOGGLE_ACTIVE_CHECK]: (state, action) => {
        action.payload.e.target.classList.toggle("active");
        return {
            ...state,
            data: state.data.map(item =>
                item.idList === action.payload.idBox ?
                    {
                        ...item, tasks:
                            item.tasks.map(nameTask =>
                                nameTask.id === action.payload.idTask ?
                                    {
                                        ...nameTask,
                                        selected: !nameTask.selected
                                    } : nameTask)
                    } : item)
        }
    },

    [ADD_NEW_DASHBOARD]: (state, action) => {
        let newDashboard = {
            title: action.payload.newTitle,
            tasks: [
                {
                    id: String(generateId()),
                    selected: action.payload.selected,
                    name: action.payload.newTask
                }]
        };

        return {...state, data: [...state.data, newDashboard]}
    },

    [SHOW_SIDEBAR]: (state, action) => {
        return {...state, display: action.payload}
    },

    [CLOSE_SIDEBAR]: (state, action) => {
        return {...state, display: action.payload}
    },

    [NEW_DASHBOARD_TITLE_TEXT]: (state, action) => {
        return {...state, inputTitle: action.payload}
    },

    [NEW_DASHBOARD_TASK_TEXT]: (state, action) => {
        return {...state, inputTask: action.payload}
    }
}, initialState);

function* func() {
    const response = yield call(getList);
    console.log(response);
    yield put(actions.fetchListSuccess(response.data));
}


function* addDashboard(action) {
    yield call(addBox, {
        title: action.payload.newTitle,
        tasks: [
            {
                id: String(generateId()),
                name: action.payload.newTask,
                selected: action.payload.selected
            }]
    });
}

function* deleteList(action) {
    yield call(deleteBox, action.payload);
    //yield call(func);
}

function* infoList(action) {
    const response = yield call(getOneList, action.payload);
    console.log(response);
    yield put(actions.fetchOneList(response.data));
}

export function* saga() {
    yield takeEvery('FETCH_LIST', func);
    yield takeEvery('ADD_NEW_DASHBOARD', addDashboard);
    yield takeEvery('DELETE_DASHBOARD', deleteList);
    yield takeEvery('INFO_ABOUT_LIST', infoList)
}
