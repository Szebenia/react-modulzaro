import { useContext } from "react";
import QuizContext from "./QuizContext";
export default function ProgressBar() {
  const { questionNumber, questionCategory } = useContext(QuizContext);
  const barWidth = questionNumber * 10;
  return (
    <>
    <div>
    {questionNumber < 10 ? <h2>Question Category: {questionCategory}</h2> : ""}
    </div>
    <div
      className="progress"
      role="progressbar"
      aria-label="Example with label"
      aria-valuenow="25"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div className="progress-bar" style={{ width: `${barWidth}%` }}>
        {questionNumber}/10
      </div>
    </div>
    </>
  );
}
