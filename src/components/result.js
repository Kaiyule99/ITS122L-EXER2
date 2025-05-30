import React from 'react';
import './result.css'; // Import the CSS file

function Result({ score, total }) {
  return (
    <div className="result-card">
      <h2 className="result-title">Exam Complete</h2>
      <p className="result-score">
        You scored <strong>{score}</strong> out of <strong>{total}</strong>
      </p>
    </div>
  );
}

export default Result;