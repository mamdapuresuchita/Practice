import React from "react";

const Result = ({ score, total }) => {
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-5 text-center">
        <h2 className="mb-3 text-success"> Quiz Completed!</h2>
        <h4>
          Your Score: {score} / {total}
        </h4>
        <p className="mt-2 text-muted">
          {score === total
            ? "Perfect! You're a genius "
            : score >= total / 2
            ? "Good job! Keep it up "
            : "Don’t worry, you’ll do better next time "}
        </p>
        <button className="btn btn-success mt-3" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
};

export default Result;
