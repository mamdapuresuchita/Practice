import React, { useEffect, useState } from "react";
import quizData from "./quizData";
import Result from "./Result";

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = useState(0);
  const [answered, setAnswered] = useState(false);

  //to update progress & scroll to top on each question change
  useEffect(() => {
    setProgress(((current + 1) / quizData.length) * 100);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [current]);

  useEffect(() => {
    if (isFinished) {
      console.log("Quiz finished!! Your Final Score is", score);
    }
  }, [isFinished, score]);

  //handle option select
  const handleSelect = (option) => {
    if (!answered) {
      setSelected(option);
      setAnswered(true); // ✅ Set to true so highlight appears
      if (option === quizData[current].answer) {
        setScore((prev) => prev + 1);
      }
    }
  };

  //next question logic
  const handleNext = () => {
    if (current + 1 < quizData.length) {
      setCurrent((prev) => prev + 1);
      setSelected("");
      setAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) return <Result score={score} total={quizData.length} />;

  const currentQuestion = quizData[current];

  const changeColor = (option) => {
    if (!answered) {
      return selected === option ? "btn-primary" : "btn-outline-secondary";
    }
    if (option === currentQuestion.answer) {
      return "btn-success"; //green
    }
    if (option === selected && option !== currentQuestion.answer) {
      return "btn-danger"; //red
    }
    return "btn-outline-secondary";
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h4 className="text-center mb-3 text-success">
          Category: {currentQuestion.category}
        </h4>

        {/* Progress Bar */}

        <div className="progress mb-3">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${progress}%` }}
          >
            {Math.round(progress)}%
          </div>
        </div>

        <h5 className="mb-3">{currentQuestion.question}</h5>

        {/* //Options */}
        <div className="d-grid gap-2">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`btn ${changeColor(option)} text-start p-3`}
              onClick={() => handleSelect(option)}
              disabled={answered}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Next Button */}

        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!selected}
          >
            {current + 1 === quizData.length ? "Finish" : "Next"}
          </button>
        </div>

        <p className="text-center text-muted mt-3">
          Question {current + 1} of {quizData.length}
        </p>
      </div>
    </div>
  );
};

export default Quiz;
