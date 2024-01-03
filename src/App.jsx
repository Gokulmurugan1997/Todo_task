import React from 'react'
import Add from './Components/Add'
import Todo from './Components/Todo'
import { useState } from 'react'


function App() {
  let [todo,setTodo] = useState([{
    id:1,
    task:"Learn React",
    description:"Need to complete tasks",
    status:true,
  },
  {
    id:2,
    task:"Go for trekking",
    description:"Need to return from trekking before sunset",
    status:true,
  }])
  return <>
  
    <div className='container-fluid'>
    <div>
    <h1 className='header'>TODO'S</h1>
    </div>
      <div>
       <Add setTodo={setTodo}/>
       <Todo todo={todo} setTodo={setTodo}/>
      
    </div>
  </div>
  </>
  
}
export default App
