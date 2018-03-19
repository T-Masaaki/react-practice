import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

function dateString(timestamp) {
  return moment(timestamp).format()
}

const Todo = ({id, onClick, completed, text, timestamp}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
  {id}: {text}: [{dateString(timestamp)}]
  </li>
)

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
}

export default Todo