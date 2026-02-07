import React from "react";

const Question = ({ index, question }) => {
  return (
    <>
      <h2>Câu {index + 1}</h2>
      <p className="question">{question}</p>
    </>
  );
};

export default Question;
