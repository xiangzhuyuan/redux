import { VisibilityFilters, Actions } from '../constants'

let nextTodoId = 0

// 动作创建者
// 定义添加 todo 的动作,
// 参数: todo 的名称
// 返回值: 一个对象包含了动作的类型, id, 还有 todo 的名称
export const addTodo = (text) => {
  return {
    type: Actions.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

// 定义设置过滤器的动作
// 参数: 过滤器
// 返回值: 动作对象,包含动作类型, 过滤器
export const setVisibilityFilter = (filter) => {
  return {
    type: Actions.SET_VISIBILITY_FILTER,
    filter
  }
}

// 定义对于 todo 的是否完成动作
// 参数: todo 的 id
// 返回值: 动作对象, 包含动作类型,还有 id
export const toggleTodo = (id) => {
  return {
    type: Actions.TOGGLE_TODO,
    id
  }
}
