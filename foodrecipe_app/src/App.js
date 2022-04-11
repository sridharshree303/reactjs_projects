import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Products from './Products';

const App = () => {
  const [search,setSearch] = useState('');
  const YOUR_APP_ID = '648ba782';
  const YOUR_APP_KEY = '9d5ad778c0c6ce1b22ba41f532644dc2';
  const [items,setItems] = useState([]);
  const submitHandler = e =>{
    e.preventDefault();
    axios.get(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`,{
      mode: 'no-cors' // 'cors' by default
    }).then(
      res =>res.data).then(
      data => setItems(data.hits)
      // data => console.log(data)
    )
    
  }
  return (
    <div className='container' >
      <center>
        <h3 className='header'>Food Recipe App</h3>
        <form onSubmit={submitHandler}>
          <input type="text"  value={search} onChange={(e)=>setSearch(e.target.value)} /><br/>
          <input type="submit" className='btn btn-primary' value="Search"/>
        </form><br/>
        {items.length>=1 ? <Products items={items}/> : ""}
      </center>
    </div>
  )
}

export default App;
