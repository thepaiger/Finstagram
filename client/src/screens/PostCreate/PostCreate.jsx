// Packages
import { useState } from 'react';

export default function PostCreate({ handlePostCreate }) {
  const [formData, setFormData] = useState({
    img_url: '',
    caption: ''
  })
  const { img_url, caption } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      handlePostCreate(formData);
    }}>
      <h2>Upload an Image</h2>
      <label className='hidden'>
        Image URL
        <input
          type="text"
          placeholder="Image URL"
          name="img_url"
          value={img_url}
          onChange={handleChange}
          required
        />
      </label>
      <label className='hidden'>
        Caption
        <textarea
          placeholder="Write a caption..."
          name="caption"
          value={caption}
          rows='10'
          cols='30'
          onChange={handleChange}
          required
        />
      </label>
      <button>Share</button>
    </form>
  )
}
