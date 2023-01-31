import {Todos} from './TodoProvider';


type TodoActionType = { type: '[Todo] - ADD TODO',text: string} | {type:'[Todo] - DELETE TODO', id:number} | {type:'[Todo] - UPDATE TODO', id:number, text:string}



export const todoReducer = (state: Todos, action: TodoActionType):Todos=> {

      switch (action.type) {
      case '[Todo] - ADD TODO':
        const newTodo = [...state.todos, {id: state.todos.length + 1, text: action.text}]
        return {
          ...state,todos:newTodo
        }

      case '[Todo] - DELETE TODO':
        
       const deleteTodo =  [...state.todos].filter(todo => todo.id !== action.id)
        return{
          ...state,todos:deleteTodo
        }

      case '[Todo] - UPDATE TODO':
        const updateTodo = [...state.todos].map(todo => todo.id === action.id ? {...todo,text:action.text} : todo)

        return{
          ...state,todos:updateTodo
        }


       default:
        return state;
                          }
};





