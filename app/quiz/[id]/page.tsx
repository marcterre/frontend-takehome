"use client";
import RoutingButton from "@/components/Utils/RoutingButton";
import useQuestionsStore from "@/stores/useQuestionsStore";

export const Quiz = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { quiz } = useQuestionsStore();
  console.log("quiz", quiz);

  const currentQuestion = quiz.find((question) => question.id === id);
  const question = currentQuestion ? currentQuestion.question : "";
  const element = currentQuestion ? currentQuestion.element : "";
  const answer = currentQuestion ? currentQuestion.answer : "";

  console.log("currentQuestion", question);

  return (
    <main>
      <h1>{question}</h1>
      <div>{element}</div>
      <RoutingButton direction="back" />
      {+id < 4 && <RoutingButton direction="forward" id={id} input={answer} />}
      <RoutingButton direction="home" />
    </main>
  );
};

export default Quiz;
