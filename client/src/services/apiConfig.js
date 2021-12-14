import axios from 'axios';

// add conditional logic for production vs development environment
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://ph-finstagram.herokuapp.com/'
    : 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;