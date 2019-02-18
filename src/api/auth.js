import axios from 'axios/index';

export const registration = newUser => axios.post('/api/auth/register', newUser);

export const authorization = userInfo => axios.post('/api/auth/login', userInfo);