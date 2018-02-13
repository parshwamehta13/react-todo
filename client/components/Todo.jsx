import React, { PropTypes } from "react";

const Todo = ({ todo, remove }) => {
    // Each Todo
    return (
      <a
        href="#"
        className="list-group-item"
        onClick={() => {
          remove(todo.name);
        }}
      >
        {todo.displayName}
      </a>
    );
};

export default Todo;