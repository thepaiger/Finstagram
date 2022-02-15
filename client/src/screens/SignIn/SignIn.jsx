// Packages
import { useState } from "react";

// CSS
import './SignIn.css'

export default function SignIn({ handleSignIn }) {
  // Initialize form data state
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  // Set form data state to given values
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
      <h1 className="signin-heading">Finstagram</h1>

      <label className="hidden" htmlFor="signin-username">
        Username
      </label>
      <input
        className="signin-username"
        id="signin-username"
        type="text"
        placeholder="Username"
        name="username"
        value={username}
        onChange={handleChange}
        required
      />

      <label className="hidden" htmlFor="signin-password">
        Password
      </label>
      <input
        className="signin-password"
        id="signin-password"
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={handleChange}
        required
      />

      <button className="signin-btn">Log In</button>
    </form>
  );
}
