export const DASHBOARD_TITLE = 'DASHBOARD_TITLE';
export const ADD_TO_D0 = 'ADD_TO_D0';
export const DELETE_DASHBOARD = 'DELETE_DASHBOARD';
export const DELETE_TASK = 'DELETE_TASK';
export const TOGGLE_ACTIVE_CHECK = 'TOGGLE_ACTIVE_CHECK';
export const ADD_NEW_DASHBOARD = 'ADD_NEW_DASHBOARD';


export const deleteDashboard = id => ({
   type: DELETE_DASHBOARD,
    payload: id
});

export const deleteTask = (idBox, idTask) => ({
    type: DELETE_TASK,
    payload: {idBox, idTask}
});

export const changeTitle = (id, newValue) => ({
   type: DASHBOARD_TITLE,
   payload: {id, newValue}
});

export const addTask = (idBox, newValue) => ({
    type: ADD_TO_D0,
    payload: {idBox, newValue}
});

export const addNewDashboard = (newTitle, newTask) => ({
    type: ADD_NEW_DASHBOARD,
    payload: {newTitle, newTask}
});

export const toggleActive = (e, idTask) => ({
    type: TOGGLE_ACTIVE_CHECK,
    payload: {e, idTask}
});




