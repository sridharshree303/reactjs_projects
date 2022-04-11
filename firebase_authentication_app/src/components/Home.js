import React from 'react';
import { auth } from './firebase';

const Home = () => {
  return (
    <div>
      <center>
        <h3>Welcome to Home</h3>
        <button onClick={()=>auth.signOut()}>Sign Out</button>
      </center>
    </div>
  )
}

export default Home
