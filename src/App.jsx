import { useState } from 'react'
import './App.css'
import Counter from './Counter'
import Toggle from './Toggle'
import InputFieldTracker from './InputFieldTracker'
import TodoList from './TodoList'

function App() {

  return (
    <div>
      <div>
        <h1 className='title'>Learning React</h1>
      </div>
      <Counter/>
      <Toggle/>
      <InputFieldTracker/>
      <TodoList/>
    </div>
  )
}

export default App
