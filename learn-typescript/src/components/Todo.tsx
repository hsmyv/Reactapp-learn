import React from 'react'
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {FaCheck} from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';
import { TodoType } from '../types/Types';

interface TodoProps{
   todoProps: TodoType
}
const Todo = ({todoProps} :TodoProps) => {
  const {id, content} = todoProps;

  return (
    <div className='todo'>
        <div>    {content}     </div>
    
        <div>
            <IoMdRemoveCircleOutline className='icons' style={{marginRight: '8px'}}/>
            <FaRegEdit className='icons'/>
        </div>
    </div>
  )
}

export default Todo