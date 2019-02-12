import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const getList = () => axios.get('/list');

export const deleteList = id => axios.delete(`/list/${id}`);

export const addDashboard = newDashboard => axios.post('/list', newDashboard);

export const updateList = (id, newList) => axios.put(`/list/${id}`, newList);

export const getOneList = id => axios.get(`/list/${id}`);
