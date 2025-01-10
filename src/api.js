import axios from 'axios';

const api = axios.create({
    baseURL: 'https://9fq9odgpke.execute-api.sa-east-1.amazonaws.com/preProd',
});

export default api;