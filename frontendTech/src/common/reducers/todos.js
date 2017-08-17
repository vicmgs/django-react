import { combineReducers } from 'redux'
import todo from './todo'

const byIds = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      }
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.id]
    default:
      return state
  }
}

const todos = combineReducers({ byIds, allIds })

export default todos

const getAllTodos = (state) => state.allIds.map(id => state.byIds[id])

export const getVisibleTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch (filter) {
    case 'all':
      return allTodos
    case 'completed':
      return allTodos.filter((t) => t.completed)
    case 'active':
      return allTodos.filter((t) => !t.completed)
    default:
      return allTodos
  }
}
