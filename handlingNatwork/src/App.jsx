import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostItem } from "./components/PostItem.jsx";

function App() {

  const [data, setData] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);


  useEffect (() => {

    fetchData();

  }, [page]);

  async function fetchData() {

   try  {

     let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`);
   
     let d1 = await res.json();
     setData(d1);
    setIsLoading(false);
   }
    catch (error) {
    console.log(error);
   }
  }

  return (
    <>

    {IsLoading ? (<p> Data is loading..Please wait</p>
    ) :(
      <div>
       <PostItem data={data}/>
       <div style={{display:"flex", justifyContent: "space-evenly"}}>
       
        <button onClick={() =>        //{page == 1 ? null : <button> all function there }
        {if(page > 1 ){               //beacouse in the one page prev biutton is not showing
          setPage(page -1 );
        }}
       /*  { if(page > 1) 

            {setPage(page -1)}

          }*/
          }>Prev</button>
        <p>{page}</p>
        <button onClick={() => setPage(page + 1)}>next
        </button>
       </div>
       </div>
       )}
    </>
  );
}

export default App;
