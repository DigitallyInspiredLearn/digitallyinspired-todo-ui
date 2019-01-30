import {createAction, handleActions} from 'redux-actions'

export const ADD_DASHBOARD = 'ADD_DASHBOARD ';

export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const actions = {

    addNewDashboard: createAction(
        ADD_DASHBOARD,
        (title,
         idBoard,
         taskName,
         idTask) => ({title, idBoard, taskName, idTask})
    ),

    deleteDashboard: createAction(
        DELETE_DASHBOARD,
        (id) => ({id})
    ),

    updateTitleDashboard: createAction(
        UPDATE_TITLE_DASHBOARD,
        (id, newTitle) => ({id, newTitle})
    ),

    addTask: createAction(
        ADD_TASK,
        (idDashboard,
         nameTask,
         idTask) => ({idDashboard, nameTask, idTask})
    ),

    updateCheckbox: createAction(
        UPDATE_CHECKBOX,
        (idDashboard,
         idTask,
         selected) => ({idDashboard, idTask, selected})
    ),

    updateTaskName: createAction(
        UPDATE_TASK_NAME,
        (idDashboard,
         idTask,
         newTaskName)=>({idDashboard, idTask,newTaskName})
    ),

    deleteTask: createAction(DELETE_TASK,
        (idDashboard,
         idTask) => ({idDashboard, idTask})),
    };

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

export const  reducer = handleActions({
//access work
    [ADD_DASHBOARD]: (state, action) => {
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
    },
//access work
    [DELETE_DASHBOARD]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.filter(e =>{
                console.log(e.idList,action.payload.id);
                return e.idList!==action.payload.id;
            })
        })
    },
//access work
    [UPDATE_TITLE_DASHBOARD]: (state, action) => {
        return Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(e =>{
                if(e.idList===action.payload.id){
                    return {...e,title: action.payload.newTitle}
                }
                return e;
            })
        });
    },
//not access work
    [ADD_TASK]:(state, action) => {
        return Object.assign({}, state, {
                toDoBoard: state.toDoBoard.map(i =>
                    i.idList === action.payload.idDashboard ?
                        {...i, tasks:
                                [...i.tasks,
                                    {id:action.payload.idTask,
                                        selected:false,
                                        name:action.payload.nameTask
                                    }
                                    ]
                        } :i)
            }
        );
    },
//not access work
    [DELETE_TASK]: (state, action) =>{
        Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    { ...i, tasks : i.tasks.filter(e => e.id !== action.payload.idTask) }
                    : i)
        });
    },
//not access work
    [UPDATE_CHECKBOX]: (state, action) =>{
        Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    {...i, tasks: i.tasks.map(e => e.id === action.payload.idTask ?
                            {...e,selected: !action.payload.selected}
                            : e)
                    } : i)
        });
    },
//not access work
    [UPDATE_TASK_NAME]: (state, action) =>{
        Object.assign({}, state, {
            toDoBoard: state.toDoBoard.map(i =>
                i.idList === action.payload.idDashboard ?
                    {...i, tasks: i.tasks.map(e => e.id===action.payload.idTask ?
                            {...e,name:action.payload.newTaskName }
                            :e)
                    } : i )
        });
    },

},initialState);