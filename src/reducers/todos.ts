import "core-js";
import { Action } from "../actions";

interface TodoItem {
  id: number,
  text: string,
  completed: boolean
} 
type TodoState = TodoItem | undefined;

const todo = (state: TodoState, action: Action<any>): TodoState => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      const item = state as TodoItem;
      if (item.id !== action.payload) {
        return state
      }

      return Object.assign({}, state, {
        completed: !item.completed
      })
    default:
      return state
  }
}

const todos = (state: TodoItem[] = [], action: Action<any>) => {
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
