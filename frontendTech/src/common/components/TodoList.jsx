import React from 'react'

import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo) =>
        <Todo key={todo.id} todo={todo} onClick={() => {
          onTodoClick(todo.id)
        }}/>
      )}
    </ul>
  )
}

export default TodoList
