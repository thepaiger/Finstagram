import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}