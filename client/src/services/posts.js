import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/posts');
  return resp.data;
}

export const postPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
}