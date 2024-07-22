// Registerbox.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./App.css";
const Registerbox = ({ onbtnclick1 }) => {
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [passwordVisible, setpasswordVisible] = useState(false);
  const navigate = useNavigate();
  //logic to make password visible and hide
  const togglePasswordVisibility = () => {
    setpasswordVisible(!passwordVisible);
  }
  // logic to handle register and routing to home page
  const handleregister = () => {
    if (email.length >= 3 && username.length >= 3 && password.length >= 8) {
      navigate("/home", { state: { login: "logindone" } });
    }
    else {
      alert("Kindly enter valid email, username and password");
    }
  }
  return (

    <div className='loginbox'>
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
        <button className='loginbtn' onClick={() => { handleregister() }}>Continue</button>
      </form>
      <p className='text3'>Already have an account?<button onClick={onbtnclick1}> Login →</button></p>
    </div>

  );
};

export default Registerbox;
