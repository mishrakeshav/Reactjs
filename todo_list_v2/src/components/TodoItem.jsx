import React, { useState } from "react";

function TodoItem(props) {
  return (
    <div
      onClick={() => {
        props.handleClick(props.id);
      }}
    >
      <li>{props.name}</li>
    </div>
  );
}
export default TodoItem;
