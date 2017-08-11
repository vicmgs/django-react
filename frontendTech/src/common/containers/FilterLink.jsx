import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const FilterLink = ({ children, filter }) => (
  <NavLink to={filter === 'all' ? '' : filter}>
    {children}
  </NavLink>
)

export default FilterLink
