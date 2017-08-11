import { connect } from 'react-redux'

import TodoList from '../components/TodoList.jsx'
import * as Actions from '../actions/actions.js'
import * as TodoHelpers from '../helpers/todos.js'

const mapStateToTodoProps = (state) => ({
  todos: TodoHelpers.getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(Actions.toggleTodo(id))
  }
})


const VisibleTodoList = connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList)

export default VisibleTodoList
