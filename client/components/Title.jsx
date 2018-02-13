import React, { PropTypes } from "react";

const Title = ({ todoCount }) => {
    return (
      <div>
        <div>
          <h1>To-Do ({todoCount})</h1>
        </div>
      </div>
    );
};
export default Title;