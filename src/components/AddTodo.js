import { memo } from "react"
function AddTodo({submitHandle, onChange, todo})
{
    console.log('ADDTODO Rendered')

    return(
        <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={onChange}/>
        <button disabled={!todo} type="submit">Add</button>
      </form>
    )
}
export default memo(AddTodo)