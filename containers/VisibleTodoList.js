import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList


// connect 方法 <- react-redux
// 连接一个 React 组件和 Redux 的 store
// 返回一个新的对应的React组件类
// 它能够将状态和动作创建者注入到组件里.

// Redux store
// hold state tree

// 对于 react 组件来说, 所有的状态只有通过 props 才能够修改

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
// 这个目的就是把所有的 redux 的数据转换为 props. 然后实现.