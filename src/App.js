import { useState, useReducer, useMemo, useCallback, useEffect } from "react";
import todoReducer from "./reducers/todoReducer";
import Header from "./components/Header";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { PostService, UserService } from "./services";
function App(){

  const [name, setName] = useState('Hasan')
  useEffect(() => {
    PostService.getPosts().then(res => console.log(res))
    PostService.newPost({
      userId: 3,
      title: 'test',
      body: 'test'
    }).then(res => console.log(res))
    UserService.getUsers().then(res => console.log(res))

  })
  /*
  console.log('App Rendered')
  const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: '',
    search: ''
  });

  const submitHandle = useCallback(
    e => {
      e.preventDefault()
      dispatch({
        type: 'ADD_TODO',
        todo: state.todo
      })
    }, [state.todo])

  const onChange = useCallback(
    e => {
      dispatch({
        type: 'SET_TODO',
        value: e.target.value
      })
    })


  const searchHandle = e => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(() => {
    return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
  }, [state.todos, state.search])

  */
  return (
    <>
    
    {/* <Header/>
      
      <h3>{count}</h3>
      <button onClick={() => setCount(count => count + 1)}>
        Artir
      </button>
      <h1>Todo App</h1>
      <input type="text" value={state.search} placeholder="Search Todos in List" onChange={searchHandle}/>
      <hr/>
        <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
      <Todos todos={filteredTodos}/> */}



      {/* <input type="text" value={name} onChange={e => setName(e.target.value)}/><br/>
      {name} */}

      
    </>
  )
}

export default App;