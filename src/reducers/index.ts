import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { TodoItem } from './todos'

export interface AppState {
  todos: TodoItem[],
  visibilityFilter: string;
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
