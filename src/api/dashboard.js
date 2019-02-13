import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const registration = (newUser) => (
    console.log(newUser),
    axios.post('/api/auth/register', newUser)
)

export const authorization = (userInfo) => (
    console.log(userInfo),
    axios.post('/api/auth/login', userInfo)

)

export const getList = () => axios.get('/api/todolists');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const getOneList = (id) => axios.get(`/api/todolists/${id}`);
