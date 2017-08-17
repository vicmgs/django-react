import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TodoList from '../components/TodoList.jsx'
import * as Actions from '../actions/actions.js'
import { getVisibleTodos } from '../configureStore'

const mapStateToTodoProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all')
})

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(Actions.toggleTodo(id))
  }
})


const VisibleTodoList = withRouter(connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList))

export default VisibleTodoList
