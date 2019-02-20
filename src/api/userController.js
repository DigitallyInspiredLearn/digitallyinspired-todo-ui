import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getCurrentUser = () => axios.get('/api/users/me');
