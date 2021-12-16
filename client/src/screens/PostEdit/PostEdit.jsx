// Packages
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// CSS
import './PostEdit.css'

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
      setFormData({ caption: singlePost?.caption });
      setImage(singlePost?.img_url)
      setImageAlt(`${singlePost?.user?.username}'s Post`)
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
    <div className="edit-div">
      <form
        className="edit-form"
        onSubmit={(e) => {
          e.preventDefault();
          handlePostUpdate(post_id, formData);
        }}
      >
        <h2 className="edit-heading">Edit Post</h2>
        <div className="edit-img-div">
          <img className="edit-img" src={image} alt={imageAlt} />
        </div>
        <label className='hidden' htmlFor="edit-caption">
          Caption
        </label>
        <textarea
          className="edit-caption"
          id="edit-caption"
          placeholder="Update caption..."
          name="caption"
          value={caption}
          onChange={handleChange}
          required
        />
        <button className="edit-button">Share</button>
      </form>
      <button className="delete-button" onClick={() => handlePostDelete(post_id)}>Delete Post</button>
    </div>
  )
}
