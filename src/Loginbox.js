// Loginbox.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";

const Loginbox = ({ onbtnclick }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setpasswordVisible] = useState(false);
  const navigate = useNavigate();
  //logic to make password visible and hide
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }
  // logic to handle login and routing to home page
  const handlelogin = () => {
    if (email.length >= 3 && password.length >= 8) {
      navigate("/home", { state: { login: "logindone" } });
    }
    else {
      alert("Kindly enter valid email and password");
    }
  }

  return (

    <div className='loginbox'>
      <p className='text1'>WELCOME BACK</p>
      <p className='text2'>Log into your account</p>
      <form>
        <label>Email or Username</label>
        <input type='text' value={email} className='emailinput' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter your email or username' />
        <label><span>Password</span><span>Forgot password?</span></label>
        <div className="password-input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="passwordinput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => { setpassword(e.target.value) }}
          />
          <button
            type="button"
            className="toggle-password-button"
            onClick={() => { togglePasswordVisibility() }}
          >
            {!passwordVisible ? '🙈' : '👁️'}
          </button>
        </div>
        <button className='loginbtn' onClick={() => { handlelogin() }}>Login now</button>
      </form>
      <p className='text3'>Not registered yet?<button onClick={onbtnclick}> Register →</button></p>
    </div>

  );
};

export default Loginbox;
