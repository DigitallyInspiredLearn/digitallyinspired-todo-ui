import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getList = () => axios.get('/api/todolists');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const getOneList = (id) => axios.get(`/api/todolists/${id}`);
