import RoutingButton from "@/components/Utils/RoutingButton/RoutingButton";
import useQuestionsStore from "@/stores/useQuestionsStore";

type QuizDisplayProps = {
  id: string;
};

export const QuizDisplay = (props: QuizDisplayProps) => {
  const { id } = props;

  const { getAnswer, getQuestion, questions } = useQuestionsStore();
  const answer = getAnswer(id);
  const currentQuestion = getQuestion(id);
  const { question, note, element } = currentQuestion
    ? currentQuestion
    : { question: "", note: "", element: "" };

  const currentIndex = questions.findIndex((q) => q.id === id);
  const isLastQuestion = currentIndex === questions.length - 1;

  const NextQuestionButton = !isLastQuestion && (
    <RoutingButton direction="forward" id={id} />
  );

  return (
    <>
      <h1>{question}</h1>
      <p>{note}</p>
      <div>{element}</div>
      <div>{answer}</div>
      <RoutingButton direction="back" />
      {id === "2" ? <RoutingButton direction="path" /> : NextQuestionButton}
      <RoutingButton direction="home" />
    </>
  );
};

export default QuizDisplay;
