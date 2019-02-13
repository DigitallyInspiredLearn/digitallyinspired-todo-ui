import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const registration = (newUser) => {
    console.log(newUser);
    // axios.post('/api/auth/register', newUser);
};

export const authorization = (userInfo) => {
    // console.log(userInfo);
    axios.post('/api/auth/login', userInfo)
        .then((response) => {
            if (response.status === 200) {
                console.log('Successful authorization!');
                console.log('token:', response.data);
            } else if (response.status === 404) {
                console.log('Failed authorization');
            }
        });
};

export const getList = () => axios.get('/api/todolists');

export const deleteList = id => axios.delete(`/api/todolists/${id}`);

export const addDashboard = newDashboard => axios.post('/api/todolists', newDashboard);

export const updateList = (id, newList) => axios.put(`/api/todolists/${id}`, newList);

export const getOneList = id => axios.get(`/api/todolists/${id}`);
