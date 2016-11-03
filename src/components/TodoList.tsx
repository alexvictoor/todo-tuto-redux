import * as React from 'react'
import Todo from './Todo'

interface TodoItem {
  id: number,
  completed: boolean,
  text: string
}

interface TodoListProps {
  todos: TodoItem[],
  onTodoClick: (id: number) => void
}

const TodoList = ({ todos, onTodoClick }: TodoListProps) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
)

export default TodoList
