import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getMyList = () => axios.get('/api/todolists/my');

export const getSharedLists = () => axios.get('/api/todolists/shared');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const shareTodoListToUser = (id, userName) =>
    axios.post(`http://localhost:8080/api/todolists/${id}/share?username=${userName}`);
