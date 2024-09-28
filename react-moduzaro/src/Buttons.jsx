import { useState, useContext } from "react";
import QuizContext from "./QuizContext";

export default function Buttons() {
  const { questionNumber, setQuestionNumber, isAnswered, setIsAnswered } =
    useContext(QuizContext);

  const handleNextQuestion = () => {
    if (questionNumber < 10) {
      if (isAnswered) {
        setQuestionNumber((prevNumber) => prevNumber + 1);
        setIsAnswered(false);
      } else {
        alert("Select an answer!");
      }
    }
  };

  return (
    <div className="container d-flex flex-row justify-content-between pt-3">
      <button className="btn btn-primary" onClick={handleNextQuestion}>Next Question</button>
      <button className="btn btn-success">Add New Question</button>
    </div>
  );
}
