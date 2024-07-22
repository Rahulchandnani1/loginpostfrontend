// Registerbox.js
import React, { useState } from 'react';
import cross from "./assets/Cross 2.png";
import "./App.css";
const Registerboxhome = ({ onbtnclick1, onhandshow }) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setpasswordVisible] = useState(false);
  //logic to make password visible and hide
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }


  return (

    <div className='loginbox'>
      <button className='crossbtn' onClick={onhandshow}><img src={cross} /></button>
      <p className='text1'>SIGN UP</p>
      <p className='text2'>Create an account to continue</p>
      <form>
        <label>Email</label>
        <input type='text' value={email} className='emailinput' onChange={(e) => { setemail(e.target.value) }} placeholder='Enter your email' />
        <label>Username</label>
        <input type='text' value={username} className='emailinput' onChange={(e) => { setusername(e.target.value) }} placeholder='Choose a preferred username' />
        <label><span>Password</span><span>Forgot password?</span></label>
        <div className="password-input-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            className="passwordinput"
            placeholder="Choose a strong password"
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
        <button className='loginbtn' onClick={onhandshow}>Continue</button>
      </form>
      <p className='text3'>Already have an account?<button onClick={onbtnclick1}> Login →</button></p>
    </div>

  );
};

export default Registerboxhome;
