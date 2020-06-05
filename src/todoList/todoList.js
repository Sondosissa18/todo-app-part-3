import React, { Component } from "react";
import TodoItem from "../todoItem/todoItem";

class TodoList extends Component {
  render() {
    console.log(this.props);
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              handleChecked={this.props.handleChecked}
              handleDeleteTodo={this.props.handleDeleteTodo}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
