import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://',
  responseType: 'json',
  headers: {
    authorization: `Token ${localStorage.getItem('token')}`
  }
});

instance.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.Authorization = `Token ${localStorage.getItem('token')}`;
  return config;
});

export default instance;
