import React, { useState } from 'react';
import Logo from "../assets/images/img-logo.png";
import '../assets/styles/Forms.css';
import { Link } from 'react-router-dom';

const StakeRegister = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    company: "",
    phone: "",
    area_code: "",
    subject: "",
    already_registered: "",
    reg_number: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    console.log("submission: ", values);
    e.preventDefault();
  }

  return <div>
    <Link to='/'>
      <img src={Logo} alt='logo' className='logo' />
    </Link>
    <div className='signin-layout' >
      <div className='event-reg-contain' >
        <div className='event-reg-header'>
          <p>Stakeholder Registration Form</p>
        </div>
        <form className='event-reg-form' onSubmit={handleSubmit} >
          <div className='event-reg-input-contain'>
            <label className='event-reg-label'>Name</label>
            <div className='event-reg-name-contain' >
              <div className='event-reg-name'>
                <input 
                  className='event-reg-input' 
                  type="text" 
                  name="first_name"
                  // value={values.first_name} 
                  onChange={handleChange}
                />
                <p className='event-reg-helper-text' >First Name</p>
              </div>
              <div className='event-reg-name'>
                <input 
                  className='event-reg-input' 
                  type="text" 
                  name="last_name"
                  // value={values.last_name}
                  onChange={handleChange}
                />
                <p className='event-reg-helper-text' >Last Name</p>
              </div>
            </div>
          </div>
          <div className='event-reg-input-contain'>
            <label className='event-reg-label'>Company</label>
            <input 
              className='event-reg-input' 
              type="text" 
              name="company"
              // value={values.company}
              onChange={handleChange}
            />
          </div>
          <div className='event-reg-input-contain'>
            <label className='event-reg-label'>Email</label>
            <input 
              className='event-reg-input' 
              type="email" 
              name="email"
              // value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className='event-reg-input-contain'>
            <label className='event-reg-label'>Phone</label>
            <div className='event-reg-phone-contain' >
              <div className='event-reg-area-code'>
                <input 
                  className='event-reg-input' 
                  type="text" 
                  name="area_code"
                  // value={values.area_code}
                  onChange={handleChange}
                />
                <p className='event-reg-helper-text' >Area Code</p>
              </div>
              <div className='event-reg-phone'>
                <input 
                  className='event-reg-input' 
                  type="text" 
                  name="phone"
                  // value={values.phone}
                  onChange={handleChange}
                />
                <p className='event-reg-helper-text' >Phone Number</p>
              </div>
            </div>
          </div>
          <div className='event-reg-input-contain'>
            <label className='event-reg-label'>Subject</label>
            <select 
              className='event-reg-input event-reg-select' 
              name="subject"
              // value={values.subject}
              onChange={handleChange}
            >
              <option hidden >Choose Option</option>
              <option value="NPA" >NPA</option>
              <option value="Seaport Terminal Operator" >Seaport Terminal Operator</option>
              <option value="Shipping Company" >Shipping Company</option>
              <option value="Off Dock Terminal Operator" >Off Dock Terminal Operator</option>
              <option value="Cargo Consolidator" >Cargo Consolidator</option>
              <option value="Logistics Service Provider" >Logistics Service Provider</option>
              <option value="Freight Forwarder/ Clearing Agent" >Freight Forwarder/ Clearing Agent</option>
              <option value="Inland Container Depot Operator" >Inland Container Depot Operator</option>
              <option value="Stevedoring Company" >Stevedoring Company</option>
              <option value="Barge Operator" >Barge Operator</option>
              <option value="Others" >Others</option>
            </select>
          </div>
          <div className='radio-btn-contain' >
            <p className='radio-btn-subject' >Are you registered with Nigerian Shippers' Council?</p>
            <div className='radio-btn' >
              <div>
                <label htmlFor="yes" >
                  <input 
                    type="radio"
                    value="Yes"
                    name="already_registered"
                    id="yes"
                    checked={values.already_registered === "Yes"}
                    onChange={handleChange}
                  />
                  <span>Yes</span>
                </label>
              </div>
              <div>
                <label htmlFor="no" >
                  <input 
                    type="radio"
                    value="No"
                    name="already_registered"
                    id="no"
                    checked={values.already_registered === "No"}
                    onChange={handleChange}
                  />
                  <span>No</span>
                </label>
              </div>
            </div>
          </div>
          {
            values.already_registered === "Yes" && (
              <div className='event-reg-input-contain'>
                <label className='event-reg-label'>Reg. Number</label>
                <input 
                  className='event-reg-input' 
                  type="text" 
                  name="reg_number"
                  // value={values.email}
                  onChange={handleChange}
                />
              </div>
            )
          }
          <button type='submit' className='event-btn-submit'>
            REGISTER
          </button>
        </form>
      </div>
    </div>
  </div>;
};

export default StakeRegister;
