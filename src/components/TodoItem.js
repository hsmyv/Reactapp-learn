import { memo } from "react"

function TodoItem({todo}){
    console.log('TODOITEM Rendered')
   return (
   <li>
    {todo}
  </li>
   )
}

export default memo(TodoItem)