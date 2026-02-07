import React, { useEffect, useState } from "react";
import quizData from "../data/questions";
import Results from "./Results";
import "./Quiz.css";
// Hàm tính điểm cuố
const calcFinalScore = (correctCount) => {
  const final = (correctCount * 10) / quizData.length;
  return Math.round(final * 10) / 10; // làm tròn 1 số thập phân
};




/* ===== HÀM XÁO TRỘN ===== */
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [shuffledQuiz, setShuffledQuiz] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [isEnded, setIsEnded] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [score, setScore] = useState({
  correct: 0,
  finalScore: 0,
});

  /* ===== KHỞI TẠO QUIZ (XÁO TRỘN) ===== */
  useEffect(() => {
    startNewQuiz();
  }, []);

  /* ===== CHỌN ĐÁP ÁN ===== */
  const selectOption = (option) => {
    if (!isReview) setOptionSelected(option);
  };

  /* ===== CÂU TIẾP ===== */
  const nextQuestion = () => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = optionSelected;
    setUserAnswers(newAnswers);
    setOptionSelected("");

    if (currentQuestion === shuffledQuiz.length - 1) {
      calcScore(newAnswers);
      setIsEnded(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  /* ===== CÂU TRƯỚC ===== */
  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  /* ===== TÍNH ĐIỂM ===== */
const calcScore = (answers) => {
  let correctCount = 0;

  answers.forEach((ans, i) => {
    if (ans === shuffledQuiz[i].answer) correctCount++;
  });

  setScore({
    correct: correctCount,
    finalScore: calcFinalScore(correctCount),
  });
};

  /* ===== LOAD LẠI ĐÁP ÁN KHI ĐỔI CÂU ===== */
  useEffect(() => {
    if (userAnswers.length > 0) {
      setOptionSelected(userAnswers[currentQuestion] || "");
    }
  }, [currentQuestion]);

  /* ===== LÀM LẠI (KHÔNG XEM LẠI) ===== */
  const restartQuiz = () => {
    startNewQuiz();
  };

  /* ===== XEM LẠI ===== */
  const reviewQuiz = () => {
    setCurrentQuestion(0);
    setIsEnded(false);
    setIsReview(true);
  };

  /* ===== BẮT ĐẦU QUIZ MỚI (XÁO TRỘN TOÀN BỘ) ===== */
  const startNewQuiz = () => {
    const shuffled = shuffleArray(quizData).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));

    setShuffledQuiz(shuffled);
    setCurrentQuestion(0);
    setOptionSelected("");
    setUserAnswers(Array(shuffled.length).fill(null));
    setScore({
            correct: 0,
            finalScore: 0,
            });
    setIsEnded(false);
    setIsReview(false);
  };

  /* ===== MÀN HÌNH KẾT QUẢ ===== */
  if (isEnded) {
    return (
      <Results
        score={score}
        totalQuestionNum={shuffledQuiz.length}
        restartQuiz={restartQuiz}
        rewatchQuiz={reviewQuiz}
      />
    );
  }

  /* ===== UI QUIZ ===== */
  if (shuffledQuiz.length === 0) return null;

  const correct = shuffledQuiz[currentQuestion].answer;
  const user = userAnswers[currentQuestion];

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">
        Câu {currentQuestion + 1} / {shuffledQuiz.length}
      </h2>

      <p className="question">{shuffledQuiz[currentQuestion].question}</p>

      <div className="options">
        {shuffledQuiz[currentQuestion].options.map((option) => (
          <button
            key={option}
            className={`option-btn
              ${optionSelected === option ? "selected" : ""}
              ${isReview && option === correct ? "correct-answer" : ""}
              ${
                isReview && option === user && user !== correct
                  ? "incorrect-answer"
                  : ""
              }
            `}
            onClick={() => selectOption(option)}
            disabled={isReview}
          >
            {option}
          </button>
        ))}
      </div>

      {isReview && (
        <p style={{ marginTop: "16px", fontWeight: 600 }}>
          {user === correct ? "Chính xác" : "Chưa chính xác"} — Đáp án đúng:{" "}
          {correct}
        </p>
      )}

      <div className="nav-buttons">
        <button onClick={prevQuestion} disabled={currentQuestion === 0}>
          Quay lại
        </button>

        {!isReview && (
          <button onClick={nextQuestion} disabled={!optionSelected}>
            {currentQuestion === shuffledQuiz.length - 1
              ? "Hoàn thành"
              : "Tiếp theo"}
          </button>
        )}

        {isReview &&
          (currentQuestion === shuffledQuiz.length - 1 ? (
            <button onClick={startNewQuiz}>Bắt đầu mới</button>
          ) : (
            <button
              onClick={() => setCurrentQuestion((prev) => prev + 1)}
            >
              Câu tiếp
            </button>
          ))}
      </div>
    </div>
  );
};

export default Quiz;
