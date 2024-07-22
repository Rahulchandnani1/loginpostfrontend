// Loginbox.js for home page
import React, { useState } from 'react';
import cross from "./assets/Cross 2.png";
import "./App.css";

const Loginbox = ({ onbtnclick, onhandshow }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setpasswordVisible] = useState(false);
  //logic to make password visible and hide
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }
  //here we are closing the popup when user click on login
  return (

    <div className='loginbox'>
      <button className='crossbtn' onClick={onhandshow}><img src={cross} /></button>
      <p className='text1'>WELCOME BACK</p>
      <p className='text2'>Log into your account</p>
      <form onSubmit={onhandshow}>
        <label>Email or Username</label>
        <input type='text' value={email} className='emailinput' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter your email or username' required />
        <label><span>Password</span><span>Forgot password?</span></label>
        <div className="password-input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="passwordinput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
            required
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={() => { togglePasswordVisibility() }}
          >
            {!passwordVisible ? '🙈' : '👁️'}
          </button>
        </div>

        <button className='loginbtn' onClick={onhandshow}>Login now</button>
      </form>
      <p className='text3'>Not registered yet?<button onClick={onbtnclick}> Register →</button></p>
    </div>

  );
};

export default Loginbox;
