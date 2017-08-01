import { connect } from 'react-redux'

import TodoList from '../components/TodoList.jsx'
import * as TodoHelpers from '../helpers/todos.js'

const mapStateToTodoProps = (state) => {
  return {
    todos: TodoHelpers.getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToTodoProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id
      })
    }
  }
}

const VisibleTodoList = connect(mapStateToTodoProps, mapDispatchToTodoProps)(TodoList)

export default VisibleTodoList
