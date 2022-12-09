import React ,{useState} from 'react';
import './App.css';

function App() {
  const [search,setSearch]=useState("")
  
  return (
         <div>
          <center>
            <h4>food receipe App</h4>
            <form>
              <input type="text" value={search} placeholder="search.." onChange={(e)=> setSearch(e.target.value)}/>
              <input type="submit" value="search"/>
              {search}
            </form>
          </center>
         </div>
  );
}

export default App;
