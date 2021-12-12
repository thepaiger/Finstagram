// Packages
import { useState } from "react";

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
    <main>
      <h1>Finstagram</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSignIn(formData);
        }}
      >
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
    </main>
  );
}
