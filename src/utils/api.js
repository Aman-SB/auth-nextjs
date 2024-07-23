import axios from 'axios';
import { getToken } from '@/utils/auth';

const api = axios.create({
    baseURL: 'http://localhost:8005/',
    withCredentials: true,
});


api.interceptors.request.use((config) => {
    const token = getToken();
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;   
},(error)=>{
    return Promise.reject(error);
}
)

export default api;