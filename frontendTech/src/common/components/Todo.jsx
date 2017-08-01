import React from 'react'

const Todo = ({ todo, onClick }) => {
  return (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={onClick}>
      {todo.text}
    </li>
  )
}

export default Todo
