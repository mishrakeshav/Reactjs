import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    fname: "",
    lname: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setFullname(prevValues => {
      if (name === "fName") {
        return {
          fname: value,
          lname: prevValues.lname
        };
      } else if (name === "lName") {
        return {
          fname: prevValues.fname,
          lname: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {fullname.fname} {fullname.lname}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
