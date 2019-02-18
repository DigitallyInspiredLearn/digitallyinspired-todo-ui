import { handleActions } from 'redux-actions';
import {
    FETCH_LIST_SUCCESS, FETCH_ONE_DASHBOARD_SUCCESS,
    SET_DASHBOARD_SUCCESS,
    SET_TASKS_SUCCESS,
    UPDATE_CHECKBOX,
    UPDATE_TASK_NAME,
    UPDATE_TITLE_DASHBOARD,
} from './duck';

const initialState = {
    toDoBoard: [],
    tasks: [],
};

export const reducer = handleActions({
    [SET_DASHBOARD_SUCCESS]: (state, action) => ({ ...state, toDoBoardRaw: action.payload }),

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
