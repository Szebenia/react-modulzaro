import { useEffect, useState } from "react";
import { useContext } from "react";
import QuizContext from "./QuizContext";
import Result from "./Result";

export default function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState({});

  const {
    questionNumber,
    setnumberOfCorrectAnswers,
    setIsAnswered,
    setQuestionCategory,
  } = useContext(QuizContext);

  const configQuestion = (questionData) => {
    const totalQuestions = questionData.length;
    const randomIndex = Math.floor(Math.random() * totalQuestions);
    setCurrentQuestion(questionData[randomIndex]);
  };

  async function downloadQuestion() {
    try {
      const response = await fetch("http://localhost:3000/questions");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const questionData = await response.json();
      configQuestion(questionData);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    downloadQuestion();
  }, [questionNumber]);

  useEffect(() => {
    setQuestionCategory(currentQuestion.category);
  });

  const handleAnswer = (selectedAnswer) => {
    setIsAnswered(true);
    if (currentQuestion.correctAnswer === selectedAnswer.option) {
      setnumberOfCorrectAnswers((prevNumber) => prevNumber + 1);
    }
  };

  return (
    <>
      {questionNumber < 10 ? (
        <div className="container d-flex flex-column gap-2">
          <h3>Question {questionNumber}</h3>
          <h4>{currentQuestion.question}</h4>
          {currentQuestion.options &&
            currentQuestion.options.map((option, index) => (
              <button
                className={"btn btn-outline-primary"}
                key={index}
                onClick={() => handleAnswer({ option })}
              >
                {option}
              </button>
            ))}
        </div>
      ) : (
        <Result />
      )}
    </>
  );
}
