import "../css/home-page_style.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import facade from "../js/apiFacade.js";

const HomePage = props => {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [noUsername, setNoUsername] = useState(null);
  const [noPassword, setNoPassword] = useState(null);

  const handleSubmit = (e) => {
   e.preventDefault();

   let constainsError = checkInput();
       
   if(!constainsError){
    facade.login(username, password)
    .then(() => {
     if(localStorage.getItem('jwtToken') !== null){
       navigate('/logout')
     }
      setError(null);
    })
    .catch(err => {
      setError("Wrong email or password");
    });
   }
  }

  const checkInput = () => {
    let containsError = false;

    setNoEmail(null);
    setNoPassword(null);
    setError(null);
    
    
    //Check for the Email
    if (username.trim() === "") {
        containsError = true;
        setNoUsername('Please enter a Username');
    }

    //Check for the password
    if (password.trim() === "") {
        containsError = true;
        setNoPassword('Please enter a Password');
      }

      if(containsError === true){
        setError("Error, please check your inputs");       
      }

      return containsError;
  };

  
  return (
    <main>
      <form onSubmit={e => handleSubmit(e)} id="login_form">     
          <h1 id="title">Login</h1>

          <div className="formContent">
            <div className="login_input_container">
              <label className="login_label" htmlFor="username">Username:</label>
              <input name="username" id="username" className="login_input" type="text" onChange={e => setUsername(e.target.value)} > 
              </input>
                
              {noUsername && (
                <div className="error_container">
                    { noUsername }
                </div>
              )}   
            </div>

            <div className="login_input_container">
              <label className="login_label" htmlFor="password">Password:</label>
              <input name="password" id="password" className="login_input" type="password" onChange={e => setPassword(e.target.value)} >
              </input>

              {noPassword && (
                <div className="error_container">
                    { noPassword }
                </div>
              )}   
            </div> 

            {error && (
              <div className="error_container" id="error_message">
                { error }
              </div>
            )}

            <div id="login_button_container">  
              <button id="login_button">Submit</button>
            </div>    

          
          </div> 
      </form>
    </main>
  )
}

export default HomePage
