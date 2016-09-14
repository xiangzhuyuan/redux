// state 当前 todo 状态
const todo = (state, action) => {
  console.log("current state in todo is: %s; and action is: %s", state, action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      return state
  }
}

// state 当前所有 todo 的 status
const todos = (state = [], action) => {
  console.log("current state in todos is: %s; and action is: %s", state, console.dir(action));
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state
  }
};

export default todos
