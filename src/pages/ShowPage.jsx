import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const ShowPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const getAllAvailableShows = () => {
    fetch("http://localhost:8080/devops_starter_war_exploded/api/MovieFestival/AvailableShows")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDataFromServer(data);

  
    }); // fetch END
  }

  return (
    <main>
      <h1>All avaiable shows</h1>

      {dataFromServer && (
        <div>
         { dataFromServer.map((index, show) => {
                return(<p key={ index } > {show.showID } </p>)
              })}
        </div>
      )}
    </main>
  )
}

export default ShowPage