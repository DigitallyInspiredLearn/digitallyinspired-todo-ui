import {createAction, handleActions} from 'redux-actions'

export const ADD_DASHBOARD = 'ADD_DASHBOARD ';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const actions = {
    addNewDashboard: createAction(ADD_DASHBOARD),
    deleteDashboard: createAction(DELETE_DASHBOARD),
    updateTitleDashboard: createAction(UPDATE_TITLE_DASHBOARD),

    addTask: createAction(ADD_TASK),
    deleteTask: createAction(DELETE_TASK),
    updateCheckbox: createAction(UPDATE_CHECKBOX),
    updateTaskName: createAction(UPDATE_TASK_NAME),
};
let toDoBoard = [
    {
        idList: 999,
        title: 'Что осталось',
        tasks: [
            {
                id: 4,
                selected: true,
                name: 'duck and smartComponents'
            },
            {
                id: 24,
                selected: false,
                name: 'Сделать LocaleStorage'
            },
            {
                id: 14,
                selected: false,
                name: 'Отрефакторить код'
            }
        ]
    }
];
export const initialState = {
    toDoBoard


};

export const reducer = handleActions({

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