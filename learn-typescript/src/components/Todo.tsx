import React from 'react'
import {IoMdRemoveCircleOutline} from "react-icons/io";
import {FaCheck} from "react-icons/fa";
import { FaRegEdit } from 'react-icons/fa';

const Todo = () => {
  return (
    <div className='todo'>
        <div>        I am first Todo        </div>
    
        <div>
            <IoMdRemoveCircleOutline className='icons' style={{marginRight: '8px'}}/>
            <FaRegEdit className='icons'/>
        </div>
    </div>
  )
}

export default Todo