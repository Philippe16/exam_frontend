import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const ShowPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);
  useEffect( () => {
    fetch("http://localhost:8080/devops_starter_war_exploded/api/moviefestival/assignedshows/" + localStorage.getItem("username"))
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
      <h1>All my shows</h1>

      {dataFromServer && dataFromServer.map((show, index) => (
         <p className="myMovies" key = {index} > {show.name}</p>
      ))}

    </main>
  )
}

export default ShowPage