// Packages
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ posts, handlePostUpdate, handlePostDelete }) {
  const [formData, setFormData] = useState({
    caption: ''
  });
  const { caption } = formData;
  const [image, setImage] = useState(null);
  const [imageAlt, setImageAlt] = useState(null);
  const { post_id } = useParams();

  useEffect(() => {
    const prefillFormData = () => {
      const singlePost = posts.find((post) => post.id === Number(post_id));
      setFormData({ caption: singlePost.caption });
      setImage(singlePost.img_url)
      setImageAlt(`${singlePost.user?.username}'s Post`)
    };
    if (posts.length) prefillFormData();
  }, [posts, post_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(post_id, formData);
      }}
    >
      <h2>Edit Post</h2>
      <img src={image} alt={imageAlt} />
      <label className='hidden'>
        Caption
        <textarea
          placeholder="Update caption..."
          name="caption"
          value={caption}
          rows='10'
          cols='30'
          onChange={handleChange}
          required
        />
      </label>
      <button>Share</button>
      <button onClick={() => handlePostDelete(post_id)}>Delete Post</button>
    </form>
  )
}
