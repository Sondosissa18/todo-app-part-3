import React from "react";
// import {connect} from "./react-redux";

class TodoItem extends React.Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onChange={(event) => this.props.handleChecked(event, this.props.id)}
          />
          <label>{this.props.title}</label>
          <button className="destroy" onClick={(event) => this.props.handleDeleteTodo(event, this.props.id)} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
