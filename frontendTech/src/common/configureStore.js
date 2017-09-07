import { createStore, combineReducers } from 'redux'
import todos, * as fromTodos from './reducers/todos'
import { fetchTodos } from './api/todos'

export const configureStore = () => {
  const store = createStore(combineReducers({ todos }))
  return store
}

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
