// Home.js
import React, { useState } from 'react';
import "./Home.css";
import icon from "./assets/Group 1 (2).png";
import iconhand from "./assets/Group 1 (4).png";
import picon from "./assets/Ellipse 2.png";
import micon from "./assets/Chat Bubble.png";
import dicon from "./assets/Dots Horizontal.png";
import { useLocation } from 'react-router-dom';
import Loginbox from './Loginboxhome';
import Registerbox from './Registerboxhome';
const Home = () => {
    const [postmain, setpostmain] = useState("");
    const location = useLocation();
    const [showbox, setshowbox] = useState(false);
    const [showbox1, setshowbox1] = useState(false);

    const [box, setbox] = useState("login");
    // logic to show different box(register and login) on basis of condition
    const handlebox = () => {
        setbox("register");
    }
    const handlebox1 = () => {
        setbox("login");
    }
    const handleshowbox = () => {
        setshowbox(!showbox);
    }
    const handleshowbox1 = () => {
        setshowbox1(true);
        setshowbox(!showbox);
    }
    const { state } = location;
    // logic to handle post addition and login
    const [content, setcontent] = useState(["Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.", "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."]);
    const addpost = () => {
        if (state || showbox1) {
            if (postmain.length > 0) {
                setcontent([...content, postmain]);
                setpostmain("");
            }
            else { alert("Kindly enter your post first"); }
        }
        else {
            alert("Kindly login first");
            setpostmain("");
        }
    }
    const handlelogin = () => {
        setshowbox(true);
    }
    return (
        <div className='homediv'>

            <div className={showbox ? "contentdivblur" : 'contentdiv'}>
                <p className='ht1'>
                    Hello User
                </p>
                <p className='ht2'>How are you doing today? Would you like to share something with the community 🤗</p>
                <div className='contentpostdiv'>
                    <p className='ht3'>Create post</p>
                    <div className='inputbox'>
                        <img src={icon} />
                        <input type='text' placeholder='How are you feeling today?' value={postmain} onChange={(e) => { setpostmain(e.target.value) }} />
                    </div>
                    <div className='pbtndiv'>
                        <button className='postbtn' onClick={() => { addpost() }}>
                            Post
                        </button>
                        {state?.login === "logindone" || showbox1 ? "" : <button className='postbtn' onClick={() => { handlelogin() }}>
                            Login
                        </button>}
                    </div>
                </div>
                <div className='posts'>
                    {content.map((item) => (
                        <div className='postdiv'>
                            <div className='profilediv'>
                                <div className='profile'>
                                    <img src={picon} className='idiv' />
                                    <div>
                                        <p className='ht4'>Theresa Webb</p>
                                        <p className='ht5'>5mins ago</p>
                                    </div>
                                </div>
                                <img src={dicon} />
                            </div>
                            <div className='postbox'>
                                <img src={iconhand} />
                                <p className='postmain' >{item}</p>
                            </div>
                            <div className='commentdiv'>
                                <img className='idiv' src={micon} />
                                24 comments
                            </div>
                        </div>))}
                </div>
            </div>
            {showbox ?
                <div className='transparentdiv'>
                    <div className='widthdiv'>
                        {box == "login" ?
                            <Loginbox onbtnclick={handlebox} onhandshow={handleshowbox1} /> :
                            <Registerbox onbtnclick1={handlebox1} onhandshow={handleshowbox1} />}
                    </div>
                </div> : ""}
        </div>
    );
};

export default Home;
