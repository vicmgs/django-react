import { createStore, combineReducers } from 'redux'
import throttle from 'lodash/throttle'
import todos, * as fromTodos from './reducers/todos'
import { loadState, saveState } from './helpers/localStorage'

export const configureStore = () => {
  const persistedState = loadState()

  const store = createStore(combineReducers({ todos }), persistedState)

  store.subscribe(throttle(() => {
    saveState({
      todos: store.getState().todos
    })
  }, 1000))

  return store
}

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
