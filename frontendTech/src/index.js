import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'

import todos from './common/reducers/todos.js'
import visibilityFilter from './common/reducers/visibilityFilter'
import TodoApp from './common/TodoApp.jsx'

const store = createStore(combineReducers({ todos, visibilityFilter }))

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>, document.getElementById('app')
)
