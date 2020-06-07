import todosList from "./todos.json";

const initState = {
  todos: todosList,
  items: todosList.length,
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return Object.assign({}, state,
         {
        todos: state.todos.concat(action.payload),
        items: state.items +1,
        }
        );

    case "DELETE_TODO":
      return Object.assign({}, state, {
        todos: state.todos.filter((todo) => action.payload !== todo.id),
        items: state.items -1,
        });
    case "TOGGLE_TODO":
      return Object.assign({}, state, {
        ...state,
        todos: state.todos.map((todo) => {if (action.payload === todo.id) { todo.completed = !todo.completed }; return todo; }),
        });
    case "CLEAR_COMPLETED_TODOS":
      let itemsRemoved = 0;
      state.todos.forEach(todo => {if(todo.completed) {itemsRemoved += 1;}});
      return Object.assign({}, state, {
        items: state.items - itemsRemoved,
        todos: state.todos.filter((todo) =>   (!todo.completed ? true : false )),
      });
    default:
      return state;
  }
};

export default todoReducer;