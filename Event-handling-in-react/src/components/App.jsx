import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [buttonColor, setButtonColor] = useState(false);
  function handleMouseOver() {
    setButtonColor(true);
  }
  function handleMouseOut() {
    setButtonColor(false);
  }
  function on_change(event) {
    setHeadingText(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={on_change}
        type="text"
        placeholder="What's your name?"
        value={headingText}
      />
      <button
        style={{ backgroundColor: buttonColor ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
