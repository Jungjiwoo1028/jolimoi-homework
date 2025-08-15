import React, { useState } from "react";
import ResultDisplay from "../Display/ResultDisplay";

function Form() {
  const [number, setNumber] = useState("");
  const [roman, setRoman] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    // Stop the form from reloading the page when submitted
    e.preventDefault();

    try {
      const num = parseInt(number);
      // Create SSE connection
      const source = new EventSource(
        `http://localhost:8000/format/roma-sse?number=${num}`
      );

      // Listen for messages from server
      source.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setRoman(data.result || data.error); // Set the result
        source.close();
      };

      setError(""); // Clear the error message
    } catch (error) {
      setError("Failed to change Roma Number"); // Set the error message
      setRoman(""); // Clear the Roma number
    }
  };

  return (
    <section>
      <h1>Convert Roma Number (SSE)</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Enter a number (0 ~ 100):
          <input
            type="number"
            min="0"
            max="100"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </label>
        <button type="submit">Change</button>
      </form>
      <ResultDisplay error={error} roman={roman}></ResultDisplay>
    </section>
  );
}

export default Form;
