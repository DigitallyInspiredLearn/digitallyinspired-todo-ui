import axios from 'axios';

export const getList = () => {
   return axios.get('/list')
}

export const getListById = (id) => {
    return axios.get(`/list/${id}`)
}

export const addList = (newDashboard) => {
    return axios.post('/list', newDashboard)
}

export const deleteList = (id) => {
    axios.delete(`/list/${id}`)
}

export const updateList = (id, val) => {
    return axios.put(`/list/${id}`, val)
}

