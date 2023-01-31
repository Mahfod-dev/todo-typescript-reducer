import { Todo,FuncTodo } from "../reducers/reducer/TodoProvider"
import { Listing } from "./Listing"


type PropsListings= {
  todos:Todo[],
  onDeleteTodo:FuncTodo['onDeleteTodo']
  onUpdateTodo:FuncTodo['onUpdateTodo']
}


const Listings = ({todos,onDeleteTodo,onUpdateTodo}:PropsListings) => {
  return (
    <>
      {
        todos.map(todo => <Listing key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}  />)
      }
    
    
    </>
  )
}
export default Listings