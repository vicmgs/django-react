import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action))
    default:
      return state
  }
}

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
        if (state.id !== action.id) {
          return state
        }
        return {
          ...state,
          completed: !todo.completed
        }
    default:
      return state
  }
}

const visibilityFilter = (state = 'VIEW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)
let nextTodoId = 0

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((t) =>
            <li key={t.id}>
              {t.text}
            </li>
          )}
        </ul>
        <input ref={node => {
          this.input = node
        }}/>
        <button onClick={() => {
          store.dispatch({
            type: 'ADD_TODO',
            text: this.input.value,
            id: nextTodoId++
          })
          this.input.value = ''
        }}>
          Add todo
        </button>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos}/>,
    document.getElementById('app')
  )
}
store.subscribe(render)
render()
