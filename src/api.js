import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gamersknowhow.com/protefalan/public/api',
});

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;