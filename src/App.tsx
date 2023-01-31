import { useState,useCallback,useReducer } from 'react'
import { todoReducer } from './reducers/reducer/useReducer'
import { Todos } from './reducers/reducer/TodoProvider'
import  Input  from './components/Input'
import Listings from './components/Listings'
import './App.css'

function App() {

  const [input, setInput] = useState<string>('')


  const initialState:Todos = {
    todos:[],
   }

  const [state,dispatch] = useReducer(todoReducer,initialState)


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(input)

    dispatch({type:"[Todo] - ADD TODO",text:input})
    setInput("")

   }

   const onDeleteTodo =useCallback(
     (id:number) => {
       dispatch({type:'[Todo] - DELETE TODO', id})
     },
     [state.todos],
   )
   

const onUpdateTodo = useCallback(
  (id:number) => {
    dispatch({type:'[Todo] - UPDATE TODO', id, text:input})
  },
  [state.todos],
)




  return (
    <div className="App">
      <h1>Todo List</h1>
     
    <Input input={input} setInput={setInput} onSubmit={onSubmit} />
    <Listings todos={state.todos}  onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
 
    </div>
  )
}

export default App
