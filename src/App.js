import React, { useState } from 'react';
import questions from './data/questions.json';
import Question from './components/Question';
import Navigation from './components/Navigation';
import Result from './components/result';


function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    setAnswers({ ...answers, [currentIndex]: answer });
  };

  const handlePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleSubmit = () => {
    let correct = 0;

    questions.forEach((q, idx) => {
      const userAnswer = (answers[idx] || "").trim().toLowerCase();
      const correctAnswer = q.answer.trim().toLowerCase();
      if (userAnswer === correctAnswer) correct++;
    });

    setScore(correct);
    setSubmitted(true);
  };

  if (submitted) return <Result score={score} total={questions.length} />;

  return (
    <div className="max-w-xl mx-auto mt-10">
      <Question
        data={currentQuestion}
        currentAnswer={answers[currentIndex]}
        onAnswer={handleAnswer}
      />
      <Navigation
        currentIndex={currentIndex}
        total={questions.length}
        onPrev={handlePrev}
        onNext={handleNext}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
