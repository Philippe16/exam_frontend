import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const SignUpPage = props => {

  const getAllAvailableShows = () => {
    fetch("http://localhost:8080/devops_starter_war_exploded/api/MovieFestival/AvailableShows")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDataFromServer(data);

      
  
    }); // fetch END
  }
  const [dataFromServer, setDataFromServer] = useState(null);
  setDataFromServer(getAllAvailableShows());

  const handleSumbit = e => {
      e.preventDefault();
      console.log(e);
  }

  return (
    <main>
      <h1>Shows avaiable for Sign Up</h1>

      <form onSubmit={e => handleSumbit(e)}>
      <label htmlFor="shows" className="formLabel"> Available Shows:</label>
        <select name="shows" id="shows" >
            <option value="" disabled >Choose a Show</option>
            {dataFromServer && (
                  dataFromServer.map((index, show) => {
                    return(<option key={ index } value={show.showID} > {show.name}  </option>)
                  })
                
            )}
       
            
        </select>
      </form>

    </main>
  )
}

export default SignUpPage