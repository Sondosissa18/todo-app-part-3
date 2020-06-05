import todosList from "./todos.json";

const initState = {
  todos: todosList,
  items: todosList.length,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state, {
        todos: state.todos.concat(action.payload),
        items: state.items + 1,
      });

    case "DELETE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => action.payload !== todo.id),
        items: state.items - 1,
      });
    case "TOGGLE_TODO":
      const toggletodos = state.todos.map((todo) => {
        if (action.payload === todo.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return toggletodos;
    case "CLEAR_COMPLETED_TODOS":
      const cleartodos = state.filter((todo) => {
        if (!todo.completed) {
          state.items -= 1;
          return true;
        }
        return false;
      });
      return cleartodos;
    default:
      return state;
  }
};

export default todoReducer;
