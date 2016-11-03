
export interface Action<T> {
    type: string,
    payload: T
}


let nextTodoId = 0
export const addTodo = (text: string) => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: nextTodoId++,
      text
    }
  }
}

export const setVisibilityFilter = (filter: any) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: filter
  }
}

export const toggleTodo = (id: any) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}
