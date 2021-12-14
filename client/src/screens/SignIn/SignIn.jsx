// Packages
import { useState } from "react";

// CSS
import './SignIn.css'

export default function SignIn({ handleSignIn }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="signin-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignIn(formData);
      }}
    >
      <h1 className="signin-finsta">Finstagram</h1>
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
      <button>Log In</button>
    </form>
  );
}
