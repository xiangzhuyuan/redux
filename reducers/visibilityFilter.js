// state 当前 filter

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log("current state in visibility is: %s; and action is: %s", state, console.dir(action));
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
