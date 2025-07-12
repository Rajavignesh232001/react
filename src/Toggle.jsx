import React, { useState } from 'react'

function Toggle() {
    const [isOn,setIsOn] = useState(false);
    const handleClick = () => {
        setIsOn(!isOn);
    }
  return (
    <div>
      <div>
        <h3>Show/Hide Toggle</h3>
        <p>{isOn ? 'ON' : 'OFF'}</p>
        <button onClick={handleClick}>on/off</button>
      </div>
      
    </div>
  )
}

export default Toggle
