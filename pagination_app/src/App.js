import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Pagination from './Pagination';


const App = () => {
  const [data,setData] = useState([]);
  const [perpage,setPerpage] = useState([]);

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(
      res => {setData(res.data);setPerpage(res.data.slice(0,10))}
    )
  },[])

  const pagehandler = (pagenumber) => {
    setPerpage(data.slice((pagenumber*10)-10,pagenumber*10))
  }
  return (
    <div className='App'>
    <div>
       <h2 className='display-6 m-4'>Post Data</h2>
    </div>
    {data.length>=1 ?
      <div>
        {perpage.map(pst => <div className="post">{pst.title}</div>)}
        <Pagination data={data} pagehandler={pagehandler}/>
      </div> :
      <p>Data Not Loaded</p>
    }
    </div>
  )
}

export default App
