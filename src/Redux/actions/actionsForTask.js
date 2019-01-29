//work with task
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (idDashboard, nameTask, idTask, selected) =>{
    return { type: ADD_TASK, idDashboard, nameTask ,idTask, selected}
};

export const updateCheckbox = (idDashboard, idTask,selected)  => {
    return { type: UPDATE_CHECKBOX, idDashboard, idTask, selected }
};

export const updateTaskName = (idDashboard, idTask,newTaskName) => {
    return { type: UPDATE_TASK_NAME, idDashboard, idTask, newTaskName }
};

export const deleteTask = (idDashboard, idTask) => {
    return { type: DELETE_TASK, idDashboard, idTask }
};