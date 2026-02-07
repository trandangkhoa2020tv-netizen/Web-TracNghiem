import React from "react";

const AnswerOption = ({
  option,
  isSelected,
  isCorrect,
  isIncorrect,
  onClick,
  disabled,
}) => {
  return (
    <button
      className={`option
        ${isSelected ? "selected" : ""}
        ${isCorrect ? "correct-answer" : ""}
        ${isIncorrect ? "incorrect-answer" : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {option}
    </button>
  );
};

export default AnswerOption;
