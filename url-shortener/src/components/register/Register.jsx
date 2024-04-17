import React, { useState } from 'react';
import { Links } from '../../pages/ShortenLinks';
import './register.css'

const Link = () =>{

}

const Register = () => {

      const [isSignUpMode, setIsSignUpMode] = useState(false);
    
      const handleSignUpClick = () => {
        setIsSignUpMode(true);
      };
    
      const handleSignInClick = () => {
        setIsSignUpMode(false);
      };

  return (
   <div className={`container ${isSignUpMode ? 'sign-up-mode' : ''}`}>
  <div className="forms-container">
    <div className="signin-signup">
      <form action="#" className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" defaultValue="Login" className="btn solid"  onClick={Link}/>
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
      <form action="#" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user" />
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock" />
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" className="btn" defaultValue="Sign up" />
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
        is an efficient and easy-to-use URL shortening service that streamlines your online experience.
        </p>
        <button className="btn transparent" id="sign-up-btn" onClick={handleSignUpClick}>
          Sign up
        </button>
      </div>
      <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt />
    </div>
    <div className="panel right-panel">
      <div className="content">
        <h3>One of Our Valued Members</h3>
        <p>
          Thank you for being part of our community. Your presence enriches our
          shared experiences. Let's continue this journey together!
        </p>
        <button className="btn transparent" id="sign-in-btn" onClick={handleSignInClick}>
         Sign in
        </button>
      </div>
      <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt />
    </div>
  </div>
</div>

  )
}

export default Register