
import { FuncTodo } from "../reducers/reducer/TodoProvider"

type PropsTodo={
  text:string,
  id:number,
  onDeleteTodo:FuncTodo['onDeleteTodo'],
  onUpdateTodo:FuncTodo['onUpdateTodo']
}



export const Listing = ({text,id,onDeleteTodo,onUpdateTodo}:PropsTodo) => {

return (
    <ul style={{display:'flex', placeItems:'center'}}>
      
        <li>{text}</li>
        <button onClick={()=> onUpdateTodo(id,'')}>Update</button>
        <button onClick={()=>onDeleteTodo(id)}>X</button>
    </ul>
  )
}