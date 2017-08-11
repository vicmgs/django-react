import { connect } from 'react-redux'

import TodoList from '../components/TodoList.jsx'
import * as Actions from '../actions/actions.js'
import * as TodoHelpers from '../helpers/todos.js'

const mapStateToTodoProps = (state, ownProps) => ({
  todos: TodoHelpers.getVisibleTodos(state.todos, ownProps.filter)
})

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(Actions.toggleTodo(id))
  }
})


const VisibleTodoList = connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList)

export default VisibleTodoList
