import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="signup-page">
      <div className="signup-container">
        <h2 className="signup-title">Create an Account</h2>
        <p className="signup-subtitle">Join us and enjoy exclusive benefits!</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            <label>Full Name</label>
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input type="password" name="password" required value={formData.password} onChange={handleChange} />
            <label>Password</label>
          </div>

          <button type="submit" className="btn-signup">Sign Up</button>
        </form>

        <p className="signup-footer">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
