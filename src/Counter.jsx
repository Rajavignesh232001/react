import React,{useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increament = () => {
    setCount (count + 1);
  }
  const decrement =() =>{
    setCount(count-1);
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <div>
        <h3 className='medium-title'>Counter App</h3>
        <p>Count : {count}</p>
        <div>
          <button onClick={increament}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
