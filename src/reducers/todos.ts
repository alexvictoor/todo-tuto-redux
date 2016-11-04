import "core-js";
import { Action } from "redux"
import { AddTodoAction, ToggleTodoAction } from "../actions";

export interface TodoItem {
  id: number,
  text: string,
  completed: boolean
} 
type TodoState = TodoItem | undefined;

const todo = (state: TodoState, action: Action): TodoState => {
  switch (action.type) {
    case 'ADD_TODO': {
      const { id, text } = action as AddTodoAction
      return {
        id,
        text,
        completed: false
      }
    }
    case 'TOGGLE_TODO': {
      const { id } = action as ToggleTodoAction
      const item = state as TodoItem;
      if (item.id !== id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !item.completed
      })
    }
    default:
      return state
  }
}

const todos = (state: TodoItem[] = [], action: Action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos
