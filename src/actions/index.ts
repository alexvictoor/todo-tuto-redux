import { Action } from 'redux'

export interface AddTodoAction extends Action {
  id: number,
  text: string
}

let nextTodoId = 0
export const addTodo = (text: string): AddTodoAction => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export interface ToggleTodoAction extends Action {
  id: number
}

export const toggleTodo = (id: any): ToggleTodoAction => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export interface SetVisibilityFilterAction extends Action {
  filter: string
}

export const setVisibilityFilter = (filter: string): SetVisibilityFilterAction => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

