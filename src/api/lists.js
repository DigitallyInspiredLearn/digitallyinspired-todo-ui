import axios from 'axios';

export const getList = () => {
   return axios.get('http://localhost:4000/list')
}

export const getListById = (id) => {
    return axios.get('http://localhost:4000/list/:'+id)
}

export const addList = (title, name) => {
    return axios.post('http://localhost:4000/list', {
        dashboard_id: 1,
        title: "title",
        tasks: [
            {
                task_id: 2,
                name: "name",
                selected: false
            }
        ]
      })
}

export const deleteList = (id) => {
    return axios.delete('http://localhost:4000/list/:'+id)
}