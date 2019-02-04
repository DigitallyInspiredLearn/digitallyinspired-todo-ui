import axios from 'axios'

export const getList = () =>
    axios.get('http://localhost:3001/list');

export const deleteList = (id) =>
    axios.delete(`http://localhost:3001/list/${id}`);

export const addDashboard = (newDashboard) =>
    axios.post('http://localhost:3001/list',newDashboard);

export const updateList = (id, newList) =>{
    console.log(id, newList);

    axios.put(`http://localhost:3001/list/${id}`,newList);
};