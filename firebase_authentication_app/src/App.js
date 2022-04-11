import React,{useEffect, useState} from 'react'
import auth from './components/firebase';
import './App.css';
import Home from './components/Home';

const App = () => {
  const [data,setData] = useState({
    email:'',
    password :''
  })

  const [presentUser,setPresentUser] = useState(null);

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        setPresentUser({
          uid:user.uid,
          email:user.email
        });
      }else{
        setPresentUser(null);
      }
      
    })
  },[])

const {email,password} = data;
const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value});
}

const signUp = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).
    then(user => console.log(user)).
    catch(err => console.log(err));
}

const signIn = e =>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password).
    then(user => console.log(user)).
    catch(err => console.log(err));
}

return (
  <div>
    <center>
      {presentUser ? <Home/> : 
        <div className='row justify-content-center '>
        <h3 className='display-6 text-center m-4'><strong>Authentication</strong></h3>
        <div className='col-sm-6 col-md-4'>
          <form className='form-group' autoComplete='off'>
            <input type="email" className='form-control'value={email} placeholder="email" name='email' onChange={changeHandler}/> <br/>
            <input type="password" className='form-control'value={password} placeholder="password" onChange={changeHandler} name='password'/> <br/>
            <div className='row justify-content-center'>
              <div className='col-sm-8 col-md-10 offset-md-1 col-lg-8 offset-lg-2'>
                  <button onClick={signIn} className='btn btn-outline-primary btn-block'>Sign In</button> &nbsp;&nbsp;
                  <button onClick={signUp} className='btn btn-outline-danger btn-block'>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
        </div>} 
    </center>
  </div>
)
}

export default App;
