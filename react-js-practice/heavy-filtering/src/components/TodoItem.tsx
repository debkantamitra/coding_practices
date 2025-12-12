import React, { memo } from "react";

const TodoItem = ({ todo, onClick, index }) => {
  console.log("TodoItem rendered:", todo);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p>{todo}</p>

      <button onClick={() => onClick(index)} style={{ marginLeft: "10px" }}>
        Remove
      </button>
    </div>
  );
};

export default memo(TodoItem);
