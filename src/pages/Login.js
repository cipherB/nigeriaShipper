import React from 'react';
import '../assets/styles/Forms.css';
import Logo from "../assets/images/img-logo.png";
import { Link } from 'react-router-dom';

const Login = () => {
  return <div>
    <Link to='/'>
      <img src={Logo} alt='logo' className='logo' />
    </Link>
      <div className='signin-layout' >
        <div className='signin-container'>
          <h1 className='header' >Sign In</h1>
          <p className='subtitle' >Enter your email and password to sign in</p>
          <form>
            <div className='input-contain' >
              <label className='input-label' >Email</label>
              <input className='input' type="email" required />
            </div>
            <div>
              <label  className='input-label'>Password</label>
              <input className='input' type="password" required  />
            </div>
            <button className='submit-btn' type='submit' >
              SIGN IN
            </button>
          </form>
        </div>
      </div>
  </div>;
};

export default Login;
