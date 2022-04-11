import React from 'react'

const TodoList = ({todolist,deleteHandler}) => {
  return (
    <div >
      {todolist.map((todo,index) =>
        <div key={index} className="mt-3">
            <h5>{todo} &nbsp; <button className='btn btn-danger btn-sm' onClick={()=>deleteHandler(index)}> X </button></h5>
        </div>)
      }
    </div>
  )
}

export default TodoList;
