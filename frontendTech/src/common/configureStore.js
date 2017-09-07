import { createStore, combineReducers, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import logger from 'redux-logger'
import todos, * as fromTodos from './reducers/todos'

export const configureStore = () => {
  const middlewares = [promise]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }

  return createStore(combineReducers({ todos }), applyMiddleware(logger))
}

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
