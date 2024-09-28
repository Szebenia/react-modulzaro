import { useContext } from "react";
import Questions from "./Questions";
import ProgressBar from "./ProgressBar";
import Buttons from "./Buttons";
import QuizContext from "./QuizContext.js";
export default function QuizApp() {
  const { questionNumber } = useContext(QuizContext);

  return (
    <>
      <header className="container d-flex felx-row justify-content-center">
        {questionNumber < 10 ? <h1>My Quiz App</h1> : <h1>Quiz Completed</h1>}
      </header>
      <main>
        <ProgressBar />
        <Questions />
        <Buttons />
      </main>
    </>
  );
}
