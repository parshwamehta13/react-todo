import React, { PropTypes } from "react";

const TodoSearch = ({searchTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <input
      placeholder="Search "
      className="form-control col-md-12"
      ref={node => {
        input = node;
      }}
      onChange={searchTodo}
    />
  );
};

export default TodoSearch;
