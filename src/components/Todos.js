import TodoItem from "./TodoItem"
import { memo } from "react"

function Todos({todos}){
    console.log('TODOS Rendered')
    return (
    <ul>
        {todos.map((todo, index) => 
          <TodoItem todo={todo} key={index}/>
        )}
      </ul>
    )
}

export default memo(Todos)