import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

const todos = (state = [], action) => {
  switch (action.type){
    case 'ADD_TODO':
      return [...state, {
        id: action.id,
        text: action.text,
        completed: false
      }]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }
        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}

ReactDOM.render(
  <div>{ JSON.stringify(todos([{id: 'agasdf'}], {})) }</div>,
  document.getElementById('app')
)
