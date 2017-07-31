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
          completed: !state.completed
        }
    default:
      return state
  }
}

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed)
  }
}

const todoApp = combineReducers({ todos, visibilityFilter })
const store = createStore(todoApp)
let nextTodoId = 0

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

const Footer = () => (
  <p>
    Show:{' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>{' '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>{' '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
)

const AddTodo = () => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }}/>
      <button onClick={() => {
        store.dispatch({
          type: 'ADD_TODO',
          text: input.value,
          id: nextTodoId++
        })
        input.value = ''
      }}>
        Add todo
      </button>
    </div>
  )
}

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return (
      <TodoList
        todos={getVisibleTodos(state.todos, state.visibilityFilter)}
        onTodoClick={id => {
          store.dispatch({
            type: 'TOGGLE_TODO',
            id
          })
        }}
      />
    )
  }
}

const Todo = ({ todo, onClick }) => {
  return (
    <li style={{textDecoration: todo.completed ? 'line-through' : 'none'}} onClick={onClick}>
      {todo.text}
    </li>
  )
}

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

class FilterLink extends React.Component {
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const props = this.props
    const state = store.getState()

    return (
      <Link active={props.filter === state.visibilityFilter} onClick={
        () => store.dispatch({
          type: 'SET_VISIBILITY_FILTER',
          filter: props.filter
        })
      }>
        { props.children }
      </Link>
    )
  }
}

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <span>{children}</span>
    )
  }
  return (
    <a href='#' onClick={e => {
      e.preventDefault()
      onClick()
    }}>
      {children}
    </a>
  )
}


ReactDOM.render(
  <TodoApp />, document.getElementById('app')
)
