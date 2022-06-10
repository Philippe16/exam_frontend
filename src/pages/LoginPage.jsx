import React, { useState, useEffect } from "react"
import facade from "../js/apiFacade";


//CSS
import "../css/login-page_style.css";

// Images
import spinner from "../images/loading_animation/spinner.gif"

const LoginPage = props => {
  const [signedIn, setSignedIn] = useState(facade.loggedIn());
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState(null);


  // Tracks username input field
  const username_handleChange = (e) => {
    setUsernameInput(e.target.value);
  }

  // Tracks password input field
  const password_handleChange = (e) => {
    setPasswordInput(e.target.value);
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    facade.login(usernameInput, passwordInput)
    .then(() => {
      setSignedIn(true);
      setError(null);
    })
    .catch(err => {
      setSignedIn(false);
      setError(err);
      console.log(err);
    });
  }

  const handleClick = (e) => {
    facade.logout();

    setSignedIn(false);
    setUsernameInput("");
    setPasswordInput("");
    setError(null);
  }

  return (
    <main>
      <h1 className="page-title">
        LoginPage
      </h1>

      {!signedIn && (
        <form id="login-form" onSubmit={ (e) => handleSubmit(e) }>        
          <h2>Login</h2>

          <label htmlFor="username-input" className="login-label">Username</label>
          <input 
            id="username-input" 
            className="login-input" 
            name="username" 
            type="text"
            onChange={ (e) => username_handleChange(e) }
          ></input>

          <label htmlFor="password-input" className="login-label">Password</label>
          <input 
            id="password-input" 
            className="login-input" 
            name="password" 
            type="password"
            onChange={ (e) => password_handleChange(e) }
          ></input>
        
          <div className="submit-btn-container">
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>

          {error && (
            <div className="error-container">Error:<br/>Something went wrong</div>
          )}
        </form>
      )}

      {signedIn && (
        <div id="logout-btn-container">
          <button id="logout-btn" type="button" onClick={(e) => handleClick(e)}>Logout</button>

          {error && (
            <div className="error-container">Error:<br/>Something went wrong</div>
          )}
        </div>
      )}
      
    </main>
  )
}

export default LoginPage