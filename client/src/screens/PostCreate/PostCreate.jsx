// Packages
import { useState } from "react";

// CSS
import './PostCreate.css'

export default function PostCreate({ handlePostCreate }) {
  const [formData, setFormData] = useState({
    img_url: "",
    caption: "",
  });
  const { img_url, caption } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="create-form"
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h2 className="create-heading">Upload an Image</h2>
      <label className="hidden" htmlFor="create-img">
        Image URL
      </label>
      <input
        className="create-img"
        id="create-img"
        type="text"
        placeholder="Image URL"
        name="img_url"
        value={img_url}
        onChange={handleChange}
        required
      />
      <label className="hidden" htmlFor="create-caption">
        Caption
      </label>
      <textarea
        className="create-caption"
        id="create-caption"
        placeholder="Write a caption..."
        name="caption"
        value={caption}
        rows="10"
        cols="30"
        onChange={handleChange}
        required
      />
      <button className="create-btn">Share</button>
    </form>
  );
}
