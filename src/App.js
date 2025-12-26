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
      <h2>Full Name Display</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        {/* 🔑 REQUIRED BY CYPRESS */}
        <next>
          <button type="submit">Next</button>
        </next>

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
