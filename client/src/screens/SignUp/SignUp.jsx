// Packages
import { useState } from "react";

export default function SignUp({ handleSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    pronouns: "",
    username: "",
    profile_pic_url: "",
    password: "",
  });
  const { email, name, pronouns, username, profile_pic_url, password } =
    formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <main>
      <h1>Finstagram</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp(formData);
        }}
      >
        <label className="hidden">
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <label className="hidden">
          Name
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label className="hidden">
          Pronouns
          <input
            type="text"
            placeholder="Pronouns"
            name="pronouns"
            value={pronouns}
            onChange={handleChange}
          />
        </label>
        <label className="hidden">
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
            required
          />
        </label>
        <label className="hidden">
          Profile Picture URL
          <input
            type="text"
            placeholder="Profile Picture URL"
            name="profile_pic_url"
            value={profile_pic_url}
            onChange={handleChange}
            required
          />
        </label>
        <label className="hidden">
          Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button>Sign Up</button>
      </form>
    </main>
  );
}
