import axios from 'axios/index';

axios.defaults.baseURL = 'http://localhost:8080';

export const searchUserByUsername = (username) => axios.get(`/api/users/search?username=${username}`);

export const getCurrentUser = () => axios.get('/api/users/me');
