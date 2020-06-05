import todosList from "./todos.json";

const initState = {
  todos: todosList,
  items: 0,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newtodos = state.push(action.payload);
      state.items += 1;
      return newtodos;

    case "DELETE_TODO":
      const filteredtodos = state.filter((todo) => action.payload !== todo.id);
      state.items -= 1;
      return filteredtodos;
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
