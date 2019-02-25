import axios from 'axios/index';

axios.defaults.baseURL = 'http://localhost:8080';

export const getCurrentUser = () => axios.get('/api/users/me');

export const deleteProfile = () => axios.delete('/api/users/deleteProfile');

export const searchUserByUsername = userName => axios.get(`/api/users/search?username=${userName}`);

export const getFollowers = () => axios.get('/api/users/followers');

export const followUser = userName => axios.post(`/api/users/followUser?username=${userName}`);

export const editProfile = newData => axios.put('/api/users/editProfile', newData);
