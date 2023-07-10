"use client";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { ButtonNavigation } from "../ButtonNavigation";
import "./QuizDisplay.styles.scss";

type QuizDisplayProps = {
  id: string;
};

export const QuizDisplay = (props: QuizDisplayProps) => {
  const { id } = props;

  const [displaySubmitMessage, setDisplaySubmitMessage] = useState(false);

  const router = useRouter();

  const { getAnswer, getQuestion } = useQuestionsStore();
  const answer = getAnswer(id);
  const currentQuestion = getQuestion(id);
  const { question, note, element } = currentQuestion
    ? currentQuestion
    : { question: "", note: "", element: "" };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // router.push(`${id}/result`);

    const form = formRef.current;
    console.log(form);
  };

  return (
    <main className="quiz-display-main">
      <div className="question-wrapper">
        <h1 className="question">{question}</h1>
        {note && <p className="question-note">{note}</p>}
      </div>
      <form className="form" onSubmit={handleSubmit} id="form">
        <div className="question-element">
          {!answer && <p className="enter-answer-message">Enter your answer</p>}
          {element}
        </div>
      </form>
      {displaySubmitMessage && (
        <div className="question-submit-message-wrapper">
          <p className="question-submit-message">
            Your submitted answer is: {answer}
          </p>
        </div>
      )}
      <ButtonNavigation
        handleClick={() => setDisplaySubmitMessage(!displaySubmitMessage)}
        id={id}
      />
    </main>
  );
};

export default QuizDisplay;
