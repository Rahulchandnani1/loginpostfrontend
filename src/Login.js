// Login.js page with two box Login and register
import React, { useState } from 'react';
import "./App.css";
import logo from "./assets/logo.svg";
import Loginbox from './Loginbox.js';
import Registerbox from './Registerbox.js';
const Login = () => {
    const [box, setbox] = useState("login");

    // logic to show different box(register and login) on basis of condition
    const handlebox = () => {
        setbox("register");
    }
    const handlebox1 = () => {
        setbox("login");
    }

    return (
        <div className='logindiv'>
            <div className='loginboxdiv' >
                <img src={logo} />
                {box === "login" ?
                    <Loginbox onbtnclick={handlebox} /> :
                    <Registerbox onbtnclick1={handlebox1} />}
            </div>
        </div>
    );
};

export default Login;
