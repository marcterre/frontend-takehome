"use client";
import Button from "components/Input/Button/Button";
import RoutingButton from "components/Utils/RoutingButton";
import useQuestionsStore from "stores/useQuestionsStore";
import { useParams, useRouter } from "next/navigation";

export const Quiz = () => {
  const params = useParams();
  const { id } = params;

  const { getAnswer, getQuestion } = useQuestionsStore();
  const answer = getAnswer(id);
  const questions = getQuestion(id);
  const router = useRouter();

  console.log("questions", questions);

  const { question, note, element } = questions!;

  const handleQuizPath = () => {
    const dateAnswer = getAnswer("1");
    const numberAnswer = getAnswer("2");

    const currentDate = new Date();
    const enteredDate = new Date(dateAnswer ?? "");

    const isDateWithin30Days =
      (currentDate.getTime() - enteredDate.getTime()) / (1000 * 3600 * 24) > 30;
    const isNumberLessThan5 = Number(numberAnswer) < 5;

    return isDateWithin30Days && isNumberLessThan5;
  };

  console.log("handleQuizPath", handleQuizPath());

  return (
    <main>
      <h1>{question}</h1>
      <p>{note}</p>
      <div>{element}</div>
      <div>{answer}</div>
      {id === "2" && (
        <Button
          handleClick={() =>
            handleQuizPath() ? router.push(`/quiz/2/path-one/101`) : ""
          }
          label="Path"
        />
      )}

      <RoutingButton direction="back" />
      {+id < 4 && <RoutingButton direction="forward" id={id} input={answer} />}
      <RoutingButton direction="home" />
    </main>
  );
};

export default Quiz;
