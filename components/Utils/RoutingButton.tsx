"use client";
import { useRouter } from "next/navigation";
import { Button } from "components/Input/Button/Button";
import useQuestionsStore from "stores/useQuestionsStore";

type Direction = "back" | "forward" | "home" | "start";

type RoutingButtonProps = {
  direction: Direction;
  id?: string;
  input?: string;
};

export const RoutingButton = (props: RoutingButtonProps) => {
  const { direction, id, input } = props;
  const router = useRouter();

  const { setAnswer, questions } = useQuestionsStore();
  const answer = questions[0].answer;
  console.log("answer", answer);

  const handleRouting = (direction: Direction, input?: string) => {
    if (direction === "forward") {
      setAnswer(id ? id : "", input ? input : "");
      return router.push(`/quiz/${id && +id + 1}`);
    }
    if (direction === "back") {
      return router.back();
    }
    if (direction === "home") {
      return router.push("/");
    }
    if (direction === "start") {
      return router.push("/quiz/1");
    }
  };

  const label = () => {
    if (direction === "forward") {
      return "Next Question";
    }
    if (direction === "back") {
      return "Previous Question";
    }
    if (direction === "home") {
      return "Home";
    }
    if (direction === "start") {
      return "Start Quiz";
    }
  };

  return (
    <Button
      label={label()}
      handleClick={() => handleRouting(direction, input)}
      variant={label()}
    />
  );
};

export default RoutingButton;
