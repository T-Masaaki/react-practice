import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = ({ activeTodosNum, completedTodosNum, todosNum }) => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All({ todosNum })
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active({ activeTodosNum })
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed({ completedTodosNum })
    </FilterLink>
  </div>
)

Footer.propTypes = {
  activeTodosNum: PropTypes.number.isRequired,
  completedTodosNum: PropTypes.number.isRequired,
  todosNum: PropTypes.number.isRequired
}

export default Footer
