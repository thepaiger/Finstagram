import axios from 'axios';

// add conditional logic for production vs development environment
const baseUrl = 'http://localhost:3000';

const api = axios.create({
  baseURL: baseUrl,
});

export default api;