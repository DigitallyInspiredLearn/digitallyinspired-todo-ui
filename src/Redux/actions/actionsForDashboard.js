//work with dashboard
export const ADD_DASHBOARD = 'ADD_DASHBOARD ';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

export const addNewDashboar = (title, id, tasks) => {
    return {
        type: ADD_DASHBOARD,
        payload: {
            title,
            id,
            tasks
        }
    }
};

export const deleteDashboard = (id) => {
    return {
        type: DELETE_DASHBOARD,
        payload:{id}
    }
};

export const updateTitleDashboard = (id, newTitle) => {
    return {
        type: UPDATE_TITLE_DASHBOARD,
        payload: {
            id,
            newTitle
        }
    }
};