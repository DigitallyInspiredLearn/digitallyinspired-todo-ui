import {
    DELETE_DASHBOARD,
    DELETE_TASK,
    DASHBOARD_TITLE,
    ADD_TO_D0,
    TOGGLE_ACTIVE_CHECK,
    ADD_NEW_DASHBOARD
} from "./actionsDashboard";


const generateId = () => {
    return Math.floor(Math.random() * 100000);
};

const initialState = {
    data: [
        {
            idList: generateId(),
            title: 'Dashboard 1',
            tasks: [
                {
                    id: generateId(),
                    selected: true,
                    name: 'Task1'
                },
                {
                    id: generateId(),
                    selected: false,
                    name: 'Task2'
                }
            ]
        },
        {
            idList: generateId(),
            title: 'Dashboard 2',
            tasks: [
                {
                    id: generateId(),
                    selected: true,
                    name: 'Task3'
                },
                {
                    id: generateId(),
                    selected: false,
                    name: 'Task4'
                }
            ]
        }
    ]

};

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_DASHBOARD: {
            return {...state, data: state.data.filter(item => item.idList !== action.payload)}
        }
        case DELETE_TASK: {
            return {
                ...state, data: state.data.map(item => {
                    if (item.idList === action.payload.idBox) {
                        return {...item, tasks: item.tasks.filter(itemTask => itemTask.id !== action.payload.idTask)}
                    }
                    return item
                })
            }
        }
        case DASHBOARD_TITLE: {
            return {...state, data: state.data.map(item =>
                    item.idList === action.payload.id ? {...item, title: action.payload.newValue} : item)}
        }
        case ADD_TO_D0: {
            let newTask =
                {
                    id: generateId(),
                    selected: false,
                    name: action.payload.newValue
                };
            return {...state, data: state.data.map(item =>
                    item.idList === action.payload.idBox ? {...item, tasks: [...item.tasks, newTask]} : item)}
        }
        case TOGGLE_ACTIVE_CHECK: {
            action.payload.e.target.classList.toggle("active");
            return {...state, data: state.data.map(item => {
                    item.tasks.map(nameTask => nameTask.id === action.payload.idTask ? {
                        ...nameTask,
                        selected: !nameTask.selected
                    } : nameTask);
                    return item
                })
            }
        }
        case ADD_NEW_DASHBOARD: {
            let newDashboard = {
                idList: generateId(),
                title: action.payload.newTitle,
                tasks: [
                    {
                        id: generateId(),
                        selected: false,
                        name: action.payload.newTask
                    }]
            };
            return {...state, data: [...state.data, newDashboard]}
        }
        default:
            return state;
    }
};