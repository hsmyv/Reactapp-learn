import React from 'react'

const TodoCreate = () => {
  return (
    <div className='todo-create'>
        <input placeholder='Todo enter...' className='todo-input' type="text" />
        <button className='todo-create-button'>Create</button>
    </div>
  )
}

export default TodoCreate