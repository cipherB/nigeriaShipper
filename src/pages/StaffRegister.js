import React from 'react';
import Logo from "../assets/images/img-logo.png";
import '../assets/styles/Forms.css';
import { Link } from 'react-router-dom';

const StaffRegister = () => {
  return <div>
    <Link to='/'>
      <img src={Logo} alt='logo' className='logo' />
    </Link>
    <div className='signin-layout' >
      <div className='staff-reg-contain'>
        <div className='staff-reg-header' >
          <hr className='staff-reg-line' />
          <h1 className='header' >Register</h1>
          <hr className='staff-reg-line' />
        </div>
        <p className='subtitle' >Create your account. It's free and only takes a minute.</p>
        <form>
          <div className='staff-reg-name input-contain'>
            <input 
              className='input'
              placeholder='First Name'
              name="first_name"
              type='text'
            />
            <input 
              className='input'
              placeholder='Last Name'
              name="last_name"
              type='text'
            />
          </div>
          <div className='input-contain' >
            <input 
              className='staff-reg-input'
              placeholder='Email'
              name="email"
              type='email'
            />
          </div>
          <div className='input-contain' >
            <input 
              className='staff-reg-input'
              placeholder='Password'
              name="password"
              type='password'
              required
            />
          </div>
          <div className='input-contain' >
            <input 
              className='staff-reg-input'
              placeholder='Confirm Password'
              name="confirm_password"
              type='password'
              required
            />
          </div>
          <div className='input-contain' >
            <label class="terms-contain">
              I accept the <span className='highlight' >Terms of Use</span> & <span className='highlight'>Privacy Policy</span>
              <input type="checkbox"  />
              <span class="checkmark"></span>
            </label>
          </div>
          <button className='staff-reg-btn' >
            Register Now
          </button>
        </form>
      </div>
    </div>
  </div>;
};

export default StaffRegister;
