"use client";

import RoutingButton from "@/components/Utils/RoutingButton";
import useQuestionsStore from "@/stores/useQuestionsStore";

export const Quiz = ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const { getQuestionId, getCurrentQuestion } = useQuestionsStore();
  const questionId = getQuestionId(id);
  const currentQuestion = getCurrentQuestion(id);

  const { question } = currentQuestion;

  console.log(questionId);
  return (
    <>
      <h2>
        {question}
        {id}
      </h2>
      <div>{question}</div>
      <RoutingButton direction="back" />
      {+id < 4 && <RoutingButton direction="forward" id={id} />}
      <RoutingButton direction="home" />
    </>
  );
};

export default Quiz;
