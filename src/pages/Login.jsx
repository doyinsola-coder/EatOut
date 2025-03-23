import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';


const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Submitted:', formData);
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Please log in to continue</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="username" required value={formData.username} onChange={handleChange} />
            <label>Username</label>
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>

          <button type="submit" className="btn-login">Login</button>
        </form>

        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
