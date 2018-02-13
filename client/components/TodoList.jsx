import Todo from './Todo.jsx'
import React, { PropTypes } from "react";

const TodoList = ({ todos, remove }) => {
    // Map through the todos
    const todoNode = todos.map(todo => {
      return <Todo todo={todo} key={todo.name} remove={remove} />;
    });
    return (
      <div className="list-group" style={{ marginTop: "30px" }}>
        {todoNode}
      </div>
    );
};

export default TodoList;