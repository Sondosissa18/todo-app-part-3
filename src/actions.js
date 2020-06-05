export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: "DELETE_TODO",
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: "TOGGLE_TODO",
    payload,
  };
};

export const clearTodo = () => {
  return {
    type: "CLEAR_COMPLETED_TODOS",
  };
};
