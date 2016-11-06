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

const toggle = (item: TodoItem, action: ToggleTodoAction): TodoItem => {
  const { id } = action
  if (item.id !== id) {
    return item
  }
  return Object.assign({}, item, {
    completed: !item.completed
  })
}

const todos = (state: TodoItem[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        createTodo(action as AddTodoAction)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        toggle(t, action as ToggleTodoAction)
      )
    default:
      return state
  }
}

export default todos
