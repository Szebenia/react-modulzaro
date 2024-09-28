import { useState } from "react";
import QuizContext from "./QuizContext";

export default function UserInfoProvider({ children }) {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [numberOfCorrectAnswers, setnumberOfCorrectAnswers] = useState(0);

  const [isAnswered, setIsAnswered] = useState(false);
  const [questionCategory, setQuestionCategory] = useState();
  
  return (
    <QuizContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        numberOfCorrectAnswers,
        setnumberOfCorrectAnswers,
        isAnswered,
        setIsAnswered,
        questionCategory,
        setQuestionCategory,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
