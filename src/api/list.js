import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getOneList = id => axios.get(`/api/todolists/${id}`);