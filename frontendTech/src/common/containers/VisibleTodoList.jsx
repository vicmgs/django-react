import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TodoList from '../components/TodoList.jsx'
import * as Actions from '../actions/actions.js'
import * as TodoHelpers from '../helpers/todos.js'

const mapStateToTodoProps = (state, { match }) => ({
  todos: TodoHelpers.getVisibleTodos(state.todos, match.params.filter || 'all')
})

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(Actions.toggleTodo(id))
  }
})


const VisibleTodoList = withRouter(connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList))

export default VisibleTodoList
