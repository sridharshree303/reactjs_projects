import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './components/Gallery';

const App = () => {
  const [search,setSearch] = useState(" ");
  const [data,setData] = useState([]);

  const changeHandler = (e) =>{
    setSearch(e.target.value);
  }
  // const apiKey = '8c9c0492606b425c410079bc5767e1ff';
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${`8c9c0492606b425c410079bc5767e1ff`}&tags=${search}&per_page=24&format=json&nojsoncallback=1
    `).then(
      response => setData(response.data.photos.photo)
    )
    console.log(search);
  }
  return (
    <div>
      <center>
        <h2 className='pt-5 pb-2'>Galler snapshots</h2>
        <form onSubmit={submitHandler}>
          <input type="text" size='20' value={search} onChange={changeHandler} /><br/><br/>
          <input type='submit' name='search'/>
        </form><hr/>
        <div className='card'>
          {data.length >=1 ? <Gallery data={data}/>:<h4>No Data Loaded</h4>}
        </div>
      </center>
    </div>
  );
}

export default App;
