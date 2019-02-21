import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
// get username: '', name : '',email: ''
export const getCurrentUser = () => axios.get('/api/users/me');
export const deleteProfile = () => axios.delete('api/users/deleteProfile');

// get array with usernames
export const searchUserByUsername = userName => axios.get(`api/users/search?username=${userName}`);

// get array usersFollowers
export const getFollowers = () => axios.get('/api/users/followers');

// return object
// {
//     "success": true/false,
//     "message": "You'll follow this user!"/ You can't...
// }
export const followUser = userName => axios.post(`/api/users/followUser?username=${userName}`);

// want body = {
//   "email": "papapa@gmail.com",
//   "name": "papapa",
//   "password": "papapa",
//   "username": "papapa"
// }
export const editProfile = newData => axios.put('/api/users/editProfile', newData);
