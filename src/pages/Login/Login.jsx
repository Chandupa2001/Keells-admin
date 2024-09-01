import React, { useState } from "react";
import "./Login.css";
import { assets } from "../../assets/assets";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { firebase } from '../../configs/FirebaseConfig'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      console.log("Email and password are required");
      return;
    }
  
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase Authentication Response:", response);
  
      if (response.user) {
        const uid = response.user.uid;
        const userRef = firebase.firestore().collection('admin').doc(uid);
        const userSnapshot = await userRef.get();
  
        if (userSnapshot.exists) {
          console.log("Admin user found, logged in successfully");
          navigate('/dashboard/home');
          localStorage.setItem('UserId', uid)
        } else {
          console.log("No admin found for these credentials");
        }
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.error("Login Error:", error.message);
    }
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
            Sign in
          </button>
        </form>
        <p className="create-account">
          Don't have an account? <span className="register" onClick={() => navigate('/signUp')} >Register</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
