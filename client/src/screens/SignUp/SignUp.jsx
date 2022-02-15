// Packages
import { useState } from "react";

// CSS
import "./SignUp.css";

export default function SignUp({ handleSignUp }) {
  // Initialize state for password verifications
  const [passwordLongEnough, setPasswordLongEnough] = useState(true);
  const [passwordConfirm, setPasswordConfirm] = useState(true);
  // Initialize form data state
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    pronouns: "",
    username: "",
    profile_pic_url: "",
    password: "",
    confirm_password: "",
  });
  const {
    email,
    name,
    pronouns,
    username,
    profile_pic_url,
    password,
    confirm_password,
  } = formData;

  // Set form data state to given values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Confirm password length
  const checkPasswordLength = () => {
    if (formData.password.length >= 8) {
      setPasswordLongEnough(true);
    } else {
      setPasswordLongEnough(false);
    }
  };

  // Confirm password matches confirm_password value
  const confirmPasswordsMatch = () => {
    if (formData.password === formData.confirm_password) {
      setPasswordConfirm(true);
    } else {
      setPasswordConfirm(false);
    }
  };

  return (
    <form
      className="signup-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSignUp(formData);
      }}
    >
      <h1 className="signup-heading">Enter Your Information</h1>

      <label className="hidden" htmlFor="signup-email">
        Email Address
      </label>
      <input
        className="signup-email"
        id="signup-email"
        type="email"
        placeholder="Email Address*"
        name="email"
        value={email}
        onChange={handleChange}
        required
      />

      <label className="hidden" htmlFor="signup-name">
        Name
      </label>
      <input
        className="signup-name"
        id="signup-name"
        type="text"
        placeholder="Full Name*"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />

      <label className="hidden" htmlFor="signup-pronouns">
        Pronouns
      </label>
      <input
        className="signup-pronouns"
        id="signup-pronouns"
        type="text"
        placeholder="Pronouns"
        name="pronouns"
        value={pronouns}
        onChange={handleChange}
      />

      <label className="hidden" htmlFor="signup-username">
        Username
      </label>
      <input
        className="signup-username"
        id="signup-username"
        type="text"
        placeholder="Username*"
        name="username"
        value={username}
        onChange={handleChange}
        required
      />

      <label className="hidden" htmlFor="signup-prof-pic">
        Profile Picture URL
      </label>
      <input
        className="signup-prof-pic"
        id="signup-prof-pic"
        type="text"
        placeholder="Profile Picture URL*"
        name="profile_pic_url"
        value={profile_pic_url}
        onChange={handleChange}
        required
      />

      <label className="hidden" htmlFor="signup-password">
        Password
      </label>
      <input
        className="signup-password"
        id="signup-password"
        type="password"
        placeholder="Password*"
        name="password"
        value={password}
        onChange={handleChange}
        onBlur={checkPasswordLength}
        required
      />

      <label className="hidden" htmlFor="signup-password-confirm">
        Password
      </label>
      <input
        className="signup-password"
        id="signup-password-confirm"
        type="password"
        placeholder="Confirm Password*"
        name="confirm_password"
        value={confirm_password}
        onChange={handleChange}
        onBlur={confirmPasswordsMatch}
        required
      />

      <button className="signup-btn">Sign Up</button>

      {/* Form validation notifiers */}
      {passwordLongEnough ? null : (
        <p className="form-validation">
          **Password must be at least 8 characters.**
        </p>
      )}
      {passwordConfirm ? null : (
        <p className="form-validation">**Passwords must match.**</p>
      )}
    </form>
  );
}
