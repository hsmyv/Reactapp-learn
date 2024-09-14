import React from 'react'
import useCounter from '../hooks/useCounter';

const Counter = () => {
    const {count, increase, decrease} = useCounter();
  return (
    <div style={{marginTop: "10px"}}>
        <div>{count}</div>
        <button className='todo-create-button' style={{marginRight: "10px"}} onClick={increase}>Increase</button>
        <button className='todo-create-button' onClick={decrease}>Decrease</button>
    </div>
  )
}

export default Counter