import axios from 'axios';

export const getList = () => {
   return axios.get('http://localhost:4000/list')
}

export const getListById = (id) => {
    return axios.get(`http://localhost:4000/list/${id}`)
}

export const addList = (title, name) => {
    return axios.post('http://localhost:4000/list', {
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
    axios.delete(`http://localhost:4000/list/${id}`)
}

export const updateList = (id, title) => {
    return axios.post(`http://localhost:4000/list/${id}`, {
        dashboard_id: 'w',
        title: title,
        tasks: [
            {
                task_id: 'e',
                name: "name",
                selected: false
            }
        ]
      })
}

