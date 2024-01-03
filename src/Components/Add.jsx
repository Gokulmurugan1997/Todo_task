import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Add(setTodo) {
  let [task, setTask] = useState("")
  let [description,setDesc] = useState("")

 let addTodo = () =>{
  setTodo((current)=>{
    id=current[current.lenght-1].id?++current[current.lenght-1].id:0

    let newArray = [...current]
    newArray.push({
      id,
      task,
      description,
      status: true
    })
    return newArray
  })
  setTask("")
  setDesc("")
 }

  return <>
  <div className='add-wrapper'>
    <div>
      <TextField id="standard-basic" label="Todo" variant="standard" value={task} size='normal' fullWidth onChange={(e)=>setTask(e.target.value)}/>
      </div>
      <div>
      <TextField id="standard-basic" label="Description" variant="standard" value={description} size='normal' fullWidth onChange={(e)=>setDesc(e.target.value)}/>
      </div>
      <div>  
        <Button variant="contained" onClick={()=>addTodo()}>ADD</Button>
      </div>
  </div>
  </>
}

export default Add