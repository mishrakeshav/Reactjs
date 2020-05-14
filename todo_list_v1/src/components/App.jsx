import React, { useState } from "react";

function App() {
  const [arr, Changearr] = useState([]);
  const [todo, Changetodo] = useState("");
  function handleChange(event) {
    const value = event.target.value;
    Changetodo(value);
  }

  function handleClick(event) {
    Changearr(prevValue => {
      return [...prevValue, todo];
    });
    Changetodo("");
    event.preventDefault();
  }
  function createListItem(item) {
    return <li>{item}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={handleClick}>
          <input onChange={handleChange} value={todo} type="text" />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>{arr.map(createListItem)}</ul>
      </div>
    </div>
  );
}

export default App;
