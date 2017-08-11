import React from 'react'
import { Provider, connect } from 'react-redux'
import { Router, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import TodoApp from '../TodoApp'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/(:filter)' component={TodoApp} />
    </BrowserRouter>
  </Provider>
)

export default Root
