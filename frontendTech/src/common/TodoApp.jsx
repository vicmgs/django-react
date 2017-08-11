import React from 'react'

import AddTodo from './containers/AddTodo.jsx'
import VisibleTodoList from './containers/VisibleTodoList.jsx'
import Footer from './components/Footer.jsx'

const TodoApp = ({ match }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={ match.params.filter || 'all' }/>
    <Footer />
  </div>
)

export default TodoApp
