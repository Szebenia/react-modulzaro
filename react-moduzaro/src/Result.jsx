import { useContext } from "react";
import QuizContext from "./QuizContext";

export default function Result() {
  const { numberOfCorrectAnswers, setQuestionNumber } = useContext(QuizContext);

  const percentage = Math.floor((10 / numberOfCorrectAnswers) * 10);

  let advice;
  let adviceBg;
  let restartBtnBg;

  if (percentage <= 40) {
    advice = "You can do better!";
    adviceBg = "btn btn-danger";
    restartBtnBg = "btn btn-outline-danger";
  } else if (percentage < 90) {
    advice = "Not Bad";
    adviceBg = "btn btn-warning";
    restartBtnBg = "btn btn-outline-warning";
  } else if (percentage >= 90) {
    advice = "Congratulations!";
    adviceBg = "btn btn-success";
    restartBtnBg = "btn btn-outline-success";
  }
  const handleRestartQuiz = () => {
    setQuestionNumber(1);
  };
  return (
    <div className="d-flex flex-column align-items-center gap-3 mt-3 border border-dark-subtle">
      <div className={adviceBg}>{advice}</div>
      <h4>Your final score</h4>
      <h2>{percentage}%</h2>
      <button className={restartBtnBg} onClick={handleRestartQuiz}>
        Restart quiz
      </button>
    </div>
  );
}
