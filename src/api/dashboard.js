import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getMyList = (page, size, sort) => (
    axios.get(`/api/todolists/?page=${page}&size=${size}&sort=${sort}&status=ACTIVE&tagId=`)
);

export const getSharedLists = () => axios.get('/api/todolists/shared');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const shareTodoListToUser = (id, userName) => (
    axios.post(`/api/todolists/${id}/share?username=${userName}`)
);
