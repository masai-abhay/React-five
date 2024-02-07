import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DataDisplay from "./components/postItem.jsx";

const App = () => {

  const [data, setData] = useState([]);
  const [isloading, setisloading] = useState(false)
  const [error,setError] = useState(null);

  const fetchData = async () => {

    setisloading(true);
    setError(null);

    try{

      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!response.ok) {
    throw new Error("Failad to fetch data");
  }

  const fetchedData = await response.json();
      setData(fetchedData);

    } catch (error) {
      setError(error.message);
    }  
    finally {
      setisloading(false);
    }

  };
   
  
  return (
    <div>
      <button onClick={fetchData} disabled={isloading}>
        {isloading ? 'Loading...' : 'Fetch Data'}
      </button>
      {error && <p>Error: {error}</p>}
      <DataDisplay data={data} />
    </div>
  );

}
export default App