import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import TodoList from "./todoList/todoList";
import { connect } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, clearTodo } from "./actions";
import "./App.css";

class App extends Component {
  state = {
    todos: [],
    items: 0,
    value: "",
  };
  // this.handleTodoChange = this.handleTodoChange.bind(this)

  componentDidMount() {
    const { todos } = this.props;
    const countitems = todos.lenght;
    this.setState({
      items: countitems,
      todos,
    });
  }
  componentWillReceiveProps(newProps) {
    const { todos, items } = newProps;
    this.setState({
      items,
      todos,
    });
  }

  handleDeleteTodo = (event, todoId) => {
    this.props.deleteTodo(todoId);
  };
  handleClearTodos = () => {
    this.props.clearTodo();
  };

  //clearcomponen
  handleChecked = (event, todoId) => {
    this.props.toggleTodo(todoId);
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  SubmitTodohandle = (event) => {
    // let itemsNumber = 0
    // let items = this.state.todos.
    let mytarget = event.target;
    if (event.key === "Enter") {
      event.preventDefault();
      let newtodo = {
        userId: 1,
        id: Math.floor(Math.random() * 100),
        title: event.target.value,
        completed: false,
      };
      this.props.addTodo(newtodo);
      mytarget.value = "";
    }
  };

  render() {
    console.log(this.state.todos);
    const { todos } = this.state;

    return (
      <section className="todoapp ">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            type="text"
            value={this.props.value}
            onChange={this.handleChange}
            onKeyDown={this.SubmitTodohandle}
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <Router>
          <div>
            <Route
              exact
              path="/"
              render={() => (
                <TodoList
                  todos={todos}
                  handleChecked={this.handleChecked}
                  handleDeleteTodo={this.handleDeleteTodo}
                  value={this.state.value}
                  items={this.state.items}
                />
              )}
            />
            <Route
              path="/active"
              render={() => (
                <TodoList
                  todos={todos.filter((todo) => {
                    return todo.completed === false;
                  })}
                  handleChecked={this.handleChecked}
                  handleDeleteTodo={this.handleDeleteTodo}
                  handleChange={this.handleChange}
                  items={this.state.items}
                />
              )}
            />
            <Route
              path="/completed"
              render={() => (
                <TodoList
                  todos={todos.filter((todo) => {
                    return todo.completed === true;
                  })}
                  handleChecked={this.handleChecked}
                  handleDeleteTodo={this.handleDeleteTodo}
                  handleChange={this.handleChange}
                  items={this.state.items}
                />
              )}
            />
          </div>

          <footer className="footer">
            <span className="todo-count">
              <strong>{this.state.items}</strong> item(s) left
            </span>
            <ul className="filters">
              <li>
                <NavLink exact to="/" activeClassName="selected">
                  All
                </NavLink>
              </li>
              <li>
                <NavLink to="/active" activeClassName="selected">
                  Active
                </NavLink>
              </li>
              <li>
                <NavLink to="/completed" activeClassName="selected">
                  Completed
                </NavLink>
              </li>
            </ul>
            <button className="clear-completed" onClick={this.handleClearTodos}>
              Clear completed
            </button>
          </footer>
        </Router>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    deleteTodo: (todoId) => dispatch(deleteTodo(todoId)),
    toggleTodo: (todoId) => dispatch(toggleTodo(todoId)),
    clearTodo: () => dispatch(clearTodo()),
  };
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoReducer.todos,
    items: state.todoReducer.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
