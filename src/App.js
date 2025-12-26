import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload

    // Custom validation
    if (firstName.trim() === "" || lastName.trim() === "") {
      setFullName("");
      return;
    }

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div>
      <h2>Enter Your Name</h2>

      {/* FORM ELEMENT */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <br />

      {/* Display only when both fields are filled */}
      {fullName && <h3>Full Name: {fullName}</h3>}
    </div>
  );
}

export default App;
