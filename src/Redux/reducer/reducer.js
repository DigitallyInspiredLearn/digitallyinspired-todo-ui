import {
    ADD_DASHBOARD,
    DELETE_DASHBOARD,
    UPDATE_TITLE_DASHBOARD,
} from "../actions/actionsForDashboardAndSider";
import { combineReducers } from 'redux'

import {
    ADD_TASK,
    DELETE_TASK,
    UPDATE_CHECKBOX,
    UPDATE_TASK_NAME,
} from "../actions/actionsForTask";

export  const initialState = {

    toDoBoard: [
        {
            idList: 999,
            title: 'Title',
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

const DashboardsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: [
                    ...state.toDoBoard,
                    {
                        idList: action.payload.idBoard,
                        title: action.payload.title,
                        tasks: [{
                            name: action.payload.taskName,
                            id:action.payload.idTask,
                            selected: false,
                        }]
                    }
                ]
            });
        case DELETE_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.filter(e =>{
                    console.log(e.idList,action.payload.id);
                    return e.idList!==action.payload.id;
                })
            });
        case UPDATE_TITLE_DASHBOARD:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(e =>{
                    if(e.idList===action.payload.id){
                        return {...e,title: action.payload.newTitle}
                    }
                    return e;
                })
            });

        case ADD_TASK:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        {...i, tasks:
                                [...i.tasks,
                                    {id:action.payload.idTask,
                                        selected:false,
                                        name:action.payload.nameTask
                                    }]} :i)
                }
            );

        case DELETE_TASK:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        { ...i, tasks : i.tasks.filter(e => e.id !== action.payload.idTask) }
                        : i)
            });
        case UPDATE_CHECKBOX:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        {...i, tasks: i.tasks.map(e => e.id === action.payload.idTask ?
                                {...e,selected: !action.payload.selected}
                                : e)
                        } : i)
            });
        case UPDATE_TASK_NAME:
            return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        {...i, tasks: i.tasks.map(e => e.id===action.payload.idTask ?
                                {...e,name:action.payload.newTaskName }
                                :e)
                        } : i )
            });
        default:
            return state;
    }
};

export const reducer = combineReducers({

    functionality : DashboardsReduser,
});

