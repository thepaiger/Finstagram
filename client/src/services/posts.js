import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const postPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
};