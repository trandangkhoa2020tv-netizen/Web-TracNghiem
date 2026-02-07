import React from "react";
import "./Results.css";

const Results = ({ score, totalQuestionNum, restartQuiz, rewatchQuiz }) => {
  return (
    <div className="results-container">
      <h2>Kết quả</h2>

      <p className="result">
         Đúng {score.correct} / {totalQuestionNum} câu
      </p>

      <p className="result">
         Điểm: <strong>{score.finalScore} / 10</strong>
      </p>

      <div className="resultButtonsContainer">
        <button
          className="result-button"
          onClick={rewatchQuiz}
        >
          Xem lại
        </button>

        <button
          className="result-button"
          onClick={restartQuiz}
        >
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Results;
