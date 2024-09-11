import React from 'react'
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {FaCheck} from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';
import { TodoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById } from '../redux/todoSlice';

interface TodoProps{
   todoProps: TodoType
}
const Todo = ({todoProps} :TodoProps) => {
  const {id, content} = todoProps;

  const dispatch = useDispatch();

  const handleRemoveTodo = () =>{
    dispatch(removeTodoById(id))
  }

  return (
    <div className='todo'>
        <div>    {content}     </div>
    
        <div>
            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{marginRight: '8px'}}/>
            <FaRegEdit className='icons'/>
        </div>
    </div>
  )
}

export default Todo