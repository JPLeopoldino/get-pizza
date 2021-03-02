import axios from 'axios';

const api = axios.create({
    baseURL: 'https://get-pizzaria.herokuapp.com/'
});

export default api;