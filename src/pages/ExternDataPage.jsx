import { useEffect, useState } from "react";
import facade from "../js/apiFacade";



const ExternDataPage = props => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        facade.fetchData("/api/externResource/bored-dogfact")
        .then(data => {
            setData(data);
            setError(null);
            console.log(data);
          })
          .catch(err => {
            setData(null);
            setError(err);
            console.log(err);
          })
    }, [])

  return (
    <main>
        <h1 className="page-title">ExternDataPage</h1>
        {data && (
          <div>
            <p>
              Random activity:<br/>
              { data.randomActivity }
            </p>

            <p>
              Random dog fact:<br/>
              {data.dogfact}
            </p>
        </div>
      )}

      {error && (
        <div>
          <p>
              oh oh.. Error.. please try again
          </p>
        </div>
      )}
    </main>
  )
}


export default ExternDataPage