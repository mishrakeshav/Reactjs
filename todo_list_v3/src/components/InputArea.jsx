import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handle_change} type="text" value={props.text} />
      <button onClick={props.additem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
