import { connect } from 'react-redux'

import Link from '../components/Link.jsx'
import * as Actions from '../actions/actions.js'

const mapStateToLinkProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToLinkProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(Actions.setVisibilityFilter(ownProps.filter))
  }
})

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

export default FilterLink
