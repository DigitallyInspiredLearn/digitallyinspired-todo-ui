
//work with dashboard
export const ADD_DASHBOARD = 'ADD_DASHBOARD ';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const UPDATE_TITLE_DASHBOARD = 'UPDATE_TITLE_DASHBOARD';

export const PRINT_ALL_DASHBOARD = 'PRINT_ALL_DASHBOARD';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
};

export const setVisibilityFilter = filter => {
    return { type: PRINT_ALL_DASHBOARD, filter }
};

export const addNewDashboar = (title, id, tasks) => {
    return { type: ADD_DASHBOARD, title, id, tasks }
};

export const deleteDashboard = (id) => {
    return { type: DELETE_DASHBOARD, id }
};

export const updateTitleDashboard = (id, newTitle) => {
    return { type: UPDATE_TITLE_DASHBOARD, id, newTitle }
};