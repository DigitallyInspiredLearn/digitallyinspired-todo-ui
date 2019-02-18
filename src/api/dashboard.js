import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getList = () => axios.get('/api/todolists/my');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const getTasks = id => axios.get('/api/tasks', id);

export const addTask = (id, newTask) => {
    console.log(id);
    console.log(newTask);
    axios.post('/api/tasks', {
        params: {
            todoListId: id,
            newTask,
        },
    });
};

export const deleteTask = id => axios.delete(`/api/tasks/${id}`);

export const updateTask = (id, task) => {
    console.log(id);
    console.log(task);
    axios.put(`/api/tasks/${id}`);
};
