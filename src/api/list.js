import axios from 'axios';

const getOneList = id => axios.get(`/api/todolists/${id}`);

export default getOneList;
