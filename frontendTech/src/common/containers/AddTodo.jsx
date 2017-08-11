import React from 'react'
import { connect } from 'react-redux'

import * as Actions from '../actions/actions.js'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }}/>
      <button onClick={() => {
        dispatch(Actions.addTodo(input.value))
        input.value = ''
      }}>
        Add todo
      </button>
    </div>
  )
}
export default AddTodo = connect()(AddTodo)
