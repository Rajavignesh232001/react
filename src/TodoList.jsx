import React,{useState} from 'react'

const TodoList = () => {
    const [task,setTask] = useState('');
    const [arrList,setArrList] = useState([]);
  
    const addTask = ()=>{
        if (task.trim() !== '') {
      setArrList([...arrList, task]);
      setTask('');
    }
    }
  return (
    <div>
        <h3>Todo List</h3>
        <input type='text' value={task} onChange={(e)=>setTask(e.target.value)} placeholder='Enter the task'></input>
        <button onClick={addTask}>Submit</button> 
        <ul>
            <li>{arrList.map((t,index)=>(
                <li key={index}>{t}</li>
            ))}</li>
        </ul>
    </div>
  )
}

export default TodoList
