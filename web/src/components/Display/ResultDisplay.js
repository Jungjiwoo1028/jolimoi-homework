import React from "react";

function ResultDisplay({ error, roman }) {
  return (
    <section>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {roman && (
        <p style={{ fontWeight: 500 }}>
          Roman number : <strong>{roman}</strong>
        </p>
      )}
    </section>
  );
}
export default ResultDisplay;
