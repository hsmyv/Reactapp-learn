import React, { useState } from 'react'
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {FaCheck, FaRegCopy} from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
import useCopyToClipboard from '../hooks/useCopyToClipboard';

interface TodoProps{
   todoProps: TodoType
}
const Todo = ({todoProps} :TodoProps) => {
  const {id, content} = todoProps;

  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = () =>{
    const payload: TodoType = {
      id : id,
      content : newTodo
    }

    dispatch(updateTodo(payload))

    setEditable(false);
  }

  const [copied, copy] = useCopyToClipboard(content);

  return (
    <div className='todo'>
      {editable ? 
      <input type='text'
      className='todo-input-edit' 
      value={newTodo} 
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}/> 
      : <div>
        {content}
        {copied && 'Copied'}
      </div>
      }
        
        <div>
            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{marginRight: '8px'}}/>
            {editable 
            ?  <FaCheck  style={{marginRight: '8px'}} className="icons" onClick={handleUpdateTodo}/> 
            : <FaRegEdit style={{marginRight: '8px'}} onClick={() => setEditable(true)} className='icons'/>}
            <FaRegCopy className='icons' onClick={() => copy}/>
        </div>
    </div>
  )
}

export default Todo