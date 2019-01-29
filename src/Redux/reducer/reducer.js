import { VisibilityFilters } from '../actions/actionsForDashboard'
import {
    ADD_DASHBOARD,
    DELETE_DASHBOARD,
    UPDATE_TITLE_DASHBOARD,
    PRINT_ALL_DASHBOARD,
} from "../actions/actionsForDashboard";
import { combineReducers } from 'redux'

import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_CHECKBOX,
    UPDATE_TASK_NAME,
} from "../actions/actionsForTask";

export   const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    toDoBoard: [
        {
            idList: 999,
            title: 'Title list',
            tasks: [
                {
                    id:4,
                    selected: true,
                    name:'Delete List,update title & selected'
                }
            ]
        },
        {
            idList: 9,
            title: 'Title list2',
            tasks: [
                {
                    id:47,
                    selected: false,
                    name:'add list/task, delete task, update task'
                }
            ]
        },
        {
            idList: 79,
            title: 'Title list3',
            tasks: [
            ]
        },
    ]
};

const { SHOW_ALL } = VisibilityFilters;

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case PRINT_ALL_DASHBOARD:
            return action.filter;
        default:
            return state
    }
};

const Dashboards = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: [
                    ...state.toDoBoard,
                    {
                        idList : action.id,
                        title: action.title,
                        tasks: action.tasks,
                    }
                ]
            });
        case DELETE_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.filter(e =>{
                    console.log(e.idList,action.id);
                    return e.idList!==action.id;
                })
            });
        case UPDATE_TITLE_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(e =>{
                    if(e.idList===action.id){
                        return {...e,title: action.newTitle}
                    }
                    return e;
                })
            });
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        case ADD_TASK:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(e =>{
                    if(e.idList===action.idDashboard){
                        return 1;
                    }
                    return 1;
                }
            )
        });
        case DELETE_TASK:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.idDashboard ?
                        { ...i, tasks : i.tasks.filter(e => e.id !== action.idTask) }
                        : i
                )
            });
        case UPDATE_CHECKBOX:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.idDashboard ?
                        {...i, tasks: i.tasks.map(e => e.id === action.idTask ?
                                {...e,selected: !action.selected}
                                : e)
                        } : i
                )
            });
        case UPDATE_TASK_NAME:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.idDashboard ?
                        {...i, tasks: i.tasks.map(e => e.id===action.idTask ?
                                {...e,name:action.newTaskName }
                                :e)
                        } : i
                )
            });

        default:
            return state;
    }
};

export const todoApp = combineReducers({
    print: visibilityFilter,
    functionality: Dashboards,
});

