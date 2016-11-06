import { combineReducers } from 'redux'
import todos from './todos'
import { TodoItem } from './todos'

export interface AppState {
  todos: TodoItem[],
  visibilityFilter: string;
}

const todoApp = combineReducers({
  todos,
})

export default todoApp
