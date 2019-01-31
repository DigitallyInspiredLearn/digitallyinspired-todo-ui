import { createActions, handleActions } from 'redux-actions';

const DELETE_DASHBOARD = 'DELETE_DASHBOARD';

export const actions = {
    deleteDashboard: createActions(DELETE_DASHBOARD),
};

const generateId = () => {
    return Math.floor(Math.random() * 1000000);
};

const initialState = {
    data: [
        {
            dashboard_id: generateId(),
            title: 'title1',
            tasks: [
                {
                    task_id: generateId(),
                    selected: false,
                    name: "task11",
                },
                {
                    task_id: generateId(),
                    selected: false,
                    name: "task12",
                }
            ],
            
        },
        {
            dashboard_id: generateId(),
            title: 'title2',
            tasks: [
                {
                    task_id: generateId(),
                    selected: true,
                    name: "task21",
                }
            ],
        }
    ]
};

export const reducer = handleActions({
    [DELETE_DASHBOARD]: (state, action) => {
        return {...state, data: state.data.filter(item => item.dashboard_id !== action.payload)}
    },

}, initialState);