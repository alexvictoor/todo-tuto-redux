import "core-js";
import { Action } from "redux"
import { AddTodoAction, ToggleTodoAction } from "../actions";

export interface TodoItem {
  id: number,
  text: string,
  completed: boolean
} 

const createTodo = (action: AddTodoAction): TodoItem => {
  const { id, text } = action;
  return {
    id,
    text,
    completed: false
  }
}

const todos = (state: TodoItem[] = [], action: Action) => {
  
  // TODO (I really mean todo ;) )

  return state
}

export default todos
