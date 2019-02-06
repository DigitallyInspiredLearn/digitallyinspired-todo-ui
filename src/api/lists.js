import axios from 'axios';

export const getList = () => {
   return axios.get('/list')
}

export const getListById = (id) => {
    return axios.get(`/list/${id}`)
}

export const addList = (title, name) => {
    return axios.post('/list', {
        dashboard_id: 'w',
        title: title,
        tasks: [
            {
                task_id: 'e',
                name: name,
                selected: false
            }
        ]
      })
}

export const deleteList = (id) => {
    axios.delete(`/list/${id}`)
}

export const updateList = (id, val) => {
    return axios.put(`/list/${id}`, val)
}

