import React from 'react';
import './Question.css'; 

const letterLabels = ['A', 'B', 'C', 'D'];

function Question({ data, currentAnswer, onAnswer }) {
  const handleChange = (value) => {
    onAnswer(value);
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-number">{data.id}</div>
        <div className="question-type">{data.type.toUpperCase()}</div>
      </div>

      <p className="question-text">{data.question}</p>

      {data.type === 'multiple' &&
        data.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleChange(option)}
            className={`option-button ${currentAnswer === option ? 'selected' : ''}`}
          >
            <span className="option-label">{letterLabels[idx]}</span>
            {option}
          </button>
        ))}

      {data.type === 'truefalse' &&
        ['True', 'False'].map((val, idx) => (
          <button
            key={val}
            onClick={() => handleChange(val)}
            className={`option-button ${currentAnswer === val ? 'selected' : ''}`}
          >
            <span className="option-label">{val[0]}</span>
            {val}
          </button>
        ))}

      {data.type === 'identification' && (
        <input
          type="text"
          value={currentAnswer || ''}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Type your answer"
          className="identification-input"
        />
      )}
    </div>
  );
}

export default Question;
