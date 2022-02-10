import React from 'react';
import '../App.css';
import Logo from "../assets/images/img-logo.png";

const Login = () => {
  return <div>
      <img src={Logo} alt='logo' className='logo' />
      <div className='signin-layout' >
        <div className='signin-container'>
          <h1 className='header' >Sign In</h1>
          <p className='subtitle' >Enter your email and password to sign in</p>
          <div>
            <div className='input-contain' >
              <label className='input-label' >Email</label>
              <input className='input' type="email" required />
            </div>
            <div>
              <label  className='input-label'>Password</label>
              <input className='input' type="password" required  />
            </div>
          </div>
          <button className='submit-btn' type='submit' >
            SIGN IN
          </button>
        </div>
      </div>
  </div>;
};

export default Login;
