import { useEffect, useState } from "react";
import facade from "../js/apiFacade";

const UserPage = props => {
  const [dataFromServer, setDataFromServer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    facade.fetchData("/api/protected/userPage")
    .then(data => {
      setDataFromServer(data);
      setError(null);
    })
    .catch(err => {
      setDataFromServer(null);
      setError(err);
    })
  }, [])


  return (
    <main>
      <h1>UserPage</h1>

      {dataFromServer && (
        <div>
          <p>
            Username: { dataFromServer.username }
          </p>

          <p>
            Role: {dataFromServer.roles.map(role => role + " ")}
          </p>
        </div>
      )}

      {error && (
        <div>
          <p>
            { error.status }
          </p>

          <p>
            Unauthorized...
          </p>
        </div>
      )}  
    </main>
  )
}

export default UserPage