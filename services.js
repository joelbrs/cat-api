import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/breeds'
});

export const api = {
    get(url) {
        return axiosInstance.get(url);
    }
}