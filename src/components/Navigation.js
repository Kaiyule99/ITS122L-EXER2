import React from 'react';
import './Navigation.css'; // We'll define styles here

function Navigation({ currentIndex, total, onPrev, onNext, onSubmit }) {
  return (
    <div className="navigation-container">
      {currentIndex > 0 && (
        <button onClick={onPrev} className="nav-button">
          Previous
        </button>
      )}

      {currentIndex < total - 1 ? (
        <button onClick={onNext} className="nav-button">
          Next
        </button>
      ) : (
        <button onClick={onSubmit} className="nav-button submit">
          Submit
        </button>
      )}
    </div>
  );
}

export default Navigation;