import axios from 'axios/index';

export const searchUserByUsername = (username) => axios.get(`/api/users/search?username=${username}`);