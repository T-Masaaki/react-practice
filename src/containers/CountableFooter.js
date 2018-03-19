import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
  activeTodosNum: state.todos.filter(todo => todo.completed === false).length,
  completedTodosNum: state.todos.filter(todo => todo.completed === true).length,
  todosNum: state.todos.length
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)