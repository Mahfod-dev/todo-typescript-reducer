

export interface Todos {
    todos: Todo[],
  
 }


export type Todo={
    id: number,
    text: string,
}

export type FuncTodo={
    onDeleteTodo: (id:number) => void,
    onUpdateTodo: (id:number, text:string) => void,
}

