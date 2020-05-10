import React, { useState } from "react";

function App() {
  const [count, setState] = useState(0);
  function increase() {
    setState(count + 1);
  }
  function decrease() {
    setState(count - 1);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
