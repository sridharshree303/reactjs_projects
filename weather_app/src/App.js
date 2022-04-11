import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [city,setCity] = useState(''); 
  const [result,setResult] = useState(' ');
  const [temp,setTemp] = useState('');
  const changeHandler = e =>{
    setCity(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    fetch(`	https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      response => response.json()
    ).then(data => {
      const kelvin = data.main.temp;
      const celcius = kelvin - 273.15;
      setTemp(Math.round(celcius)+"°C")
      setResult("Temperature at "+city);
    }
    ).catch(error => alert('Enter correct city Name'))
    setCity("");
  }
  return (
    <div className='container'>
      <center>
        <div className='row justify-content-center'>
          <div className="card mt-5 col-md-8">
            <div className="card-body">
              <h4 className="card-title">Weather App</h4>
              <form onSubmit={submitHandler}>
                <input type="text" size="35" value={city} name="city" onChange={changeHandler} /><br/>
                <input className='btn btn-info' type="submit" value="Get Temperature"/>
              </form><br/>
              <div >
                <h2>{result}</h2>
                <h1 className='display-2 mb-3'>{temp}</h1>
              </div> 
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App;
