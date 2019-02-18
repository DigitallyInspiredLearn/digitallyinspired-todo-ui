import axios from 'axios';

export const getTasks = todoListId => axios.get(`/api/tasks?todoListId=${todoListId}`);

export const addTask = (todoListId, newTask) => axios.post(`/api/tasks?todoListId=${todoListId}`, newTask);

export const deleteTask = idTask => axios.delete(`/api/tasks/${idTask}`);

export const updateTask = (idTask, newTask) => axios.put(`/api/tasks/${idTask}`, newTask);