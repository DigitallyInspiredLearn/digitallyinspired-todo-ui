//work with task
export const ADD_TASK = 'ADD_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (idDashboard, nameTask, idTask ) =>{
    return {
        type: ADD_TASK,
        payload:{
            idDashboard,
            nameTask,
            idTask,
        }
    }
};

export const updateCheckbox = (idDashboard, idTask,selected)  => {
    return {
        type: UPDATE_CHECKBOX,
        payload: {
            idDashboard,
            idTask,
            selected
        }
    }
};

export const updateTaskName = (idDashboard, idTask,newTaskName) => {
    return {
        type: UPDATE_TASK_NAME,
        payload: {
            idDashboard,
            idTask,
            newTaskName
        }
    }
};

export const deleteTask = (idDashboard, idTask) => {
    return {
        type: DELETE_TASK,
        payload: {
            idDashboard,
            idTask
        }
    }
};