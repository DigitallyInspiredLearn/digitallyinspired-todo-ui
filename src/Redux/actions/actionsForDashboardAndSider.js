//for sider
export const ADD_DASHBOARD = 'ADD_DASHBOARD ';

export const addNewDashboard = (title, idBoard, taskName, idTask) => {
    return {
        type: ADD_DASHBOARD,
        payload: {
            title,
            idBoard,
            taskName,
            idTask
        }
    }
};

//work with dashboard
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

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