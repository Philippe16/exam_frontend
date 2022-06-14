import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const SignUpPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const [show, setShow] = useState(null);
  const username = localStorage.getItem("username");
  useEffect( () => {
    fetch("http://localhost:8080/devops_starter_war_exploded/api/moviefestival/availableshows") 
    .then(res => {
      return res.json();
    })
    .then(data => {
      setDataFromServer(data);
      console.log(data);
    })
  },[]);

      const handleSumbit = e => {
        e.preventDefault 
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ show , username })
      };
      fetch("http://localhost:8080/devops_starter_war_exploded/api/moviefestival/addshows", requestOptions)
    .then(response => response.json())
      }
      
  return (
    <main>
      <h1>Shows avaiable for Sign Up</h1>

      <form onSubmit={e => handleSumbit(e)}>
      <label htmlFor="shows" className="formLabel"> Available Shows:</label>
        <select onChange={e => setShow(e.target.value)} name="shows" id="shows" >
            <option value="" disabled >Choose a Show</option>
            {dataFromServer && dataFromServer.map((show, index) => (
              <option value = {show.showID} key = {index} > {show.name}</option>
            ))}
           
        </select>
              <button type="submit"> Add show </button>
      </form>

    </main>
  )
}

export default SignUpPage