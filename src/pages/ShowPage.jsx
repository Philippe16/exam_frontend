import { useEffect, useState } from "react";
import "../css/ShowPage.css";
import facade from "../js/apiFacade";

const ShowPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);

  // Set initial weatherObj state
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
 
  return (
    <main>
      <h1>All avaiable shows</h1>

      {dataFromServer && dataFromServer.map((show, index) => (
         <p className="movies" key = {index} > {show.name}</p>
      ))}

    </main>
  )
}

export default ShowPage