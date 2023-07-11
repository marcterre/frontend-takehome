"use client";
import { useEffect, useState } from "react";
import { ButtonNavigation } from "@/components";
import { TextInput } from "@/components";
import {
  LikeToBakeQuestion,
  PreferredColorQuestion,
} from "@/views/quiz/partials";
import useQuestionsStore from "@/stores/useQuestionsStore";
import axios from "axios";
import "./QuizDisplay.styles.scss";

type QuizDisplayProps = {
  id: string;
};

export const QuizDisplay = (props: QuizDisplayProps) => {
  const { id } = props;

  const [displaySubmitMessage, setDisplaySubmitMessage] = useState(false);

  const maxDate = new Date().toISOString().split("T")[0];

  const { getAnswer, getQuestion, setQuestions } = useQuestionsStore();
  const answer = getAnswer(id);
  const currentQuestion = getQuestion(id);
  const { question, note, type } = currentQuestion || {};

  const element = () => {
    switch (id) {
      case "1":
        return (
          <TextInput
            type={type}
            label={id}
            questionId={id}
            max={maxDate}
            pattern="^[a-zA-Z0-9\s]*$"
          />
        );
      case "2":
        return (
          <TextInput type={type} label={id} questionId={id} min={0} max={10} />
        );
      case "101":
        return <TextInput type={type} questionId={id} maxLength={30} />;
      case "102":
        return <PreferredColorQuestion />;
      case "201":
        return (
          <TextInput
            type={type}
            questionId={id}
            maxLength={15}
            pattern="^[a-zA-Z0-9\s]*$"
          />
        );
      case "202":
        return <LikeToBakeQuestion />;
    }
  };

  const getData = () => {
    axios
      .get("http://localhost:3030/questions")
      .then((response) => {
        const result = response.data;
        console.log(result);
        setQuestions(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = () => {
    setDisplaySubmitMessage(!displaySubmitMessage);

    axios
      .put(
        `http://localhost:3030/questions/${id}`,
        {
          question,
          type,
          id,
          answer: answer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer();
  };

  return (
    <main className="quiz-display-main">
      <div className="question-wrapper">
        <h1 className="question">{question}</h1>
        {note && <p className="question-note">{note}</p>}
      </div>
      <form className="form" id="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="question-element">
          {!answer && <p className="enter-answer-message">Enter your answer</p>}
          {element()}
        </div>
      </form>
      {displaySubmitMessage && (
        <div className="question-submit-message-wrapper">
          <p className="question-submit-message">
            Your submitted answer is: {answer}
          </p>
        </div>
      )}
      <ButtonNavigation handleClick={() => handleAnswer()} id={id} />
    </main>
  );
};

export default QuizDisplay;
