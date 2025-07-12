import React,{useState} from 'react'

function InputFieldTracker() {

    const [inp,setInp] = useState('');
    
    const getInput = (event) => {
        setInp(event.target.value);
    }

  return (
    <div>
      <h3>Input Field Tracker</h3>
      <input type='text' value={inp} onChange={getInput} placeholder='Enter the name'></input>
      <p>Hi {inp}!</p>
    </div>
  )
}

export default InputFieldTracker
