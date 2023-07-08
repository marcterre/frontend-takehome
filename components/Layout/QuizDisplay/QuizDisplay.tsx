import RoutingButton from "@/components/Utils/RoutingButton/RoutingButton";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useRouter } from "next/navigation";
import { useRef } from "react";

type QuizDisplayProps = {
  id: string;
};

export const QuizDisplay = (props: QuizDisplayProps) => {
  const { id } = props;

  const router = useRouter();

  const { getAnswer, getQuestion, questions } = useQuestionsStore();
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

  const currentIndex = questions.findIndex((q) => q.id === id);
  const isLastQuestion = currentIndex === questions.length - 1;
  const isSubmitPage = id === "202" || id === "102";

  const NextQuestionButton =
    !isLastQuestion && !isSubmitPage ? (
      <RoutingButton type="button" direction="forward" id={id} />
    ) : (
      <RoutingButton type="submit" direction="result" id={id} form="form" />
    );

  return (
    <form ref={formRef} onSubmit={handleSubmit} id="form">
      <h1>{question}</h1>
      <p>{note}</p>
      <div>{element}</div>
      <div>{answer}</div>
      <RoutingButton type="button" direction="back" />
      {id === "2" ? (
        <RoutingButton type="button" direction="path" />
      ) : (
        NextQuestionButton
      )}
      <RoutingButton type="button" direction="home" />
    </form>
  );
};

export default QuizDisplay;
