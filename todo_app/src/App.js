import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [task,setTask] = useState(" ");
  const [todos,setTodos] = useState([]);

  const changeHandler = e =>{
    setTask(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault();
    setTodos([...todos,task]);
    setTask(" ");
  }

  const deleteHandler = (indexvalue) =>{
    const newTodos = todos.filter((todo,index)=> index !== indexvalue)
    setTodos(newTodos);
  }
  return (
    <div className='container' > 
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title mt-2">Todo Management Application</h4><br/>
            <form className='form row' onSubmit={submitHandler}>
              <div className='col-sm-3 offset-4'>
              <input type="text" className='form-control ' name='task' value={task} onChange={changeHandler} />
              </div>
              <div className='col-sm-1'>
              <input className='btn btn-primary ' type="submit" value="Add" name="Add"/>
              </div>
            </form><br/>
            <TodoList todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
