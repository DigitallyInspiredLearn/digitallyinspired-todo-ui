import axios from 'axios';

export const getTask = todoListId => axios.get('/api/tasks', todoListId);
