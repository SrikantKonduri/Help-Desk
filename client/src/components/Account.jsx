import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// const provider = new FacebookAuthProvider();

export const Register = () => {
   return (
      <>
         <div id="frame">
            <h2 id="app-title">Create Account</h2>
            <input type="name" placeholder='Name' className="input-field" id="uname">
            </input>
            <input type="email" placeholder="Email" className="input-field">
            </input>
            <input type="password" placeholder="Password"
               className="input-field">
            </input>
            <button id='signup-btn'>Sign Up</button>
            <label>
               Remember me:
               <input
                  type="checkbox"
               // checked={isChecked}
               // onChange={(e) => setIsChecked(e.target.checked)}
               />
            </label>
            <p>
               Already have an account? <a href="/login">Login</a>
            </p>
         </div>
      </>
   )
}

export const Login = () => {
   return (
      <>
         <div id="frame">
            <h2 id="app-title">Login to your Account</h2>
            <input type="email" placeholder="Email" className="input-field">
            </input>
            <input type="password" placeholder="Password"
               className="input-field">
            </input>
            <button id='login-btn'>Login</button>
            <label>
               Remember me:
               <input
                  type="checkbox"
               // checked={isChecked}
               // onChange={(e) => setIsChecked(e.target.checked)}
               />
            </label>
            <p>
               New to MyApp? <a href="/register">Sign Up</a>
            </p>
         </div>
      </>
   )
}

export const ConnectFB = () => {
   const navigate = useNavigate()
   const { signWithFacebook, authToken,setAuthToken,signOutFacebook } = useContext(AuthContext)

   const handleReply = ()=>{
      console.log("adssa")
      navigate('/agent-screen')
      console.log("Navigated")
   }

   const handleDeleteIntegration = () => {
      signOutFacebook()
      setAuthToken(null)
   }

   return (
      (authToken != null) ? (
         <>
            <div id="frame">
               <button id='signup-btn' onClick={handleDeleteIntegration}>Delete Integration</button>
               <button id='signup-btn' onClick={handleReply}>Reply to messages</button>
            </div>
         </>
      ) :
         (
            <>
               <button onClick={signWithFacebook}>
                  Login With FB
               </button>
            </>
         )

   )
}

