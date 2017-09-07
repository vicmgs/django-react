import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'

import TodoList from '../components/TodoList.jsx'
import * as Actions from '../actions/actions.js'
import { getVisibleTodos } from '../configureStore'
import { fetchTodos } from '../api'

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchData(this.props.filter)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.filter !== this.props.filter) {
      this.fetchData(nextProps.filter)
    }
  }

  fetchData(filter) {
    return fetchTodos(filter)
      .then(todos => this.props.receiveTodos(filter, todos))
  }

  render() {
    return (
      <TodoList {...this.props} />
    )
  }
}

const mapStateToTodoProps = (state, { match }) => {
  const filter = match.params.filter || 'all'
  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

const mapDispatchToTodoProps = (dispatch) => ({
  onTodoClick(id) {
    dispatch(Actions.toggleTodo(id))
  },
  receiveTodos(filter, todos) {
    dispatch(Actions.receiveTodos(filter, todos))
  }
})


VisibleTodoList = withRouter(connect(mapStateToTodoProps, mapDispatchToTodoProps)(VisibleTodoList))

export default VisibleTodoList
