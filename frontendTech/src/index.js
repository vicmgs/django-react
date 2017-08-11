import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './common/configureStore'
import Root from './common/components/Root'

ReactDOM.render(
  <Root store={configureStore()}/>,
  document.getElementById('app')
)
