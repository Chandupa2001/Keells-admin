import React, { useState } from "react";
import "./Signup.css";
import { assets } from "../../assets/assets";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src={assets.logo} alt="Keells Admin" />
          <div className="logo-text">
            <h1>Keells Admin</h1>
            <p>web control panel</p>
          </div>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              {passwordVisible ? (
                <FaEye
                  onClick={() => setPasswordVisible(false)}
                  className="toggle-password"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setPasswordVisible(true)}
                  className="toggle-password"
                />
              )}
            </div>
          </div>
          <button type="submit" className="login-button">
            Sign Up
          </button>
        </form>
        <p className="create-account">
          Already have an account? <span className="register" onClick={() => navigate('/')} >Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
