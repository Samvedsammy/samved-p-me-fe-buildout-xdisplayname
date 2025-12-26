import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === "" || lastName.trim() === "") {
      setShowResult(false);
      return;
    }

    setShowResult(true);
  };

  return (
    <div>
      <h1>Full Name Display</h1>

      <form onSubmit={handleSubmit}>
        {/* First Name row */}
        <label>
          First Name:&nbsp;
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>

        <br />

        {/* Last Name row */}
        <label>
          Last Name:&nbsp;
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <br />

        {/* Button */}
        <button
          type="submit"
          id="next"
          name="next"
          data-testid="next"
        >
          Submit
        </button>

        {/* Output */}
        {showResult && (
          <>
            <br />
            Full Name: {firstName} {lastName}
          </>
        )}
      </form>
    </div>
  );
}

export default App;
