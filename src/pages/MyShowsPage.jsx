import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const ShowPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const getAllAssignedShows = () => {
    fetch("http://localhost:8080/devops_starter_war_exploded/api/MovieFestival/AssignedShows" + localStorage.getItem("username"))
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setDataFromServer(data);

  
    }); // fetch END
  }

  return (
    <main>
      <h1>All my shows</h1>

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