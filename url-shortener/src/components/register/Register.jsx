import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/register",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // navigate("/create");
      } else {
        throw new Error("Failed to register");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleLogInClick = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/users/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/create");
      } else {
        throw new Error("Failed to log in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`container ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form" onSubmit={handleLogInClick}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            {/* button to link */}
            <button
              type="submit"
              className="btn-cta rounded-full"
              defaultValue="Sign up"
            >
              <a className="btn">Sign in</a>
            </button>
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>

          {/* sign up form */}
          <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                name="firstName"
                placeholder="Firstname"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                name="lastName"
                placeholder="Lastname"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-user" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="btn-cta rounded-full"
              defaultValue="Sign up"
            >
              <a className="btn">Sign up</a>
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google" />
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Shorten Your Loooong Links :) </h3>
            <p>
              is an efficient and easy-to-use URL shortening service that
              streamlines your online experience.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
          <img
            src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png"
            className="image"
            alt
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of Our Valued Members</h3>
            <p>
              Thank you for being part of our community. Your presence enriches
              our shared experiences. Let's continue this journey together!
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={handleSignInClick}
            >
              Sign in
            </button>
          </div>
          <img
            src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png"
            className="image"
            alt
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
