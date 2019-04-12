import axios from 'axios';

export const getTags = () => axios.get('/api/tags');
// fix style, clear fields after adding or closing a window
export const addTag = tagData => axios.post('/api/tags', tagData);
//Х visible
export const deleteTag = idTag => axios.delete(`/api/tags/${idTag}`);

export const addTagToTask = (idTag, idTask) => axios.post(`/api/tags/${idTag}?taskId=${idTask}`);

export const getDashboardForTag = tags => axios.get('/api/tags/lists', tags);

export const getTagTaskKeys = (page, size, sort, tagId) => (
    axios.get(`/api/tags/myTagTaskKeys?page=${page}&size=${size}&sort=${sort}&tagId=${tagId}`)
);

export const removeTagFromTak = (idTag, idTask) => (
    axios.delete(`/api/tags/removeTagFromTask/${idTag}?taskId=${idTask}`)
);




