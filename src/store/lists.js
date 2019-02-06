import axios from 'axios';

export const getList = () => {
    return axios.get('/list')
};

export const addBox = (newList) => {
    console.log(newList);
    axios.post('/list', newList)
};

export const deleteBox = (id) => {
    console.log(id);
    axios.delete(`/list/${id}`);
};

export const getOneList = (id) => {
    return axios.get(`/list/${id}`);
};


