"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/Inputs/Button/Button";
import useQuestionsStore from "@/stores/useQuestionsStore";
import handleQuizPath from "@/helpers/handleQuizPath";

type Direction = "back" | "forward" | "home" | "start" | "path";

type RoutingButtonProps = {
  direction: Direction;
  id?: string;
};

const RoutingButton = (props: RoutingButtonProps) => {
  const { id, direction } = props;
  const router = useRouter();
  const pathname = usePathname();

  const { getAnswer } = useQuestionsStore();

  const dateAnswer = getAnswer("1");
  const numberAnswer = getAnswer("2");

  const answerForPathDirection = handleQuizPath(dateAnswer, numberAnswer);

  const handleRouting = (direction: Direction) => {
    if (direction === "forward") {
      if (pathname === `/quiz/2/path/${id}`) {
        return router.push(`/quiz/2/path/${id && +id + 1}`);
      } else {
        return router.push(`/quiz/${id && +id + 1}`);
      }
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
    if (direction === "path") {
      if (answerForPathDirection) return router.push(`/quiz/2/path/201`);
      if (!answerForPathDirection) return router.push(`/quiz/2/path/101`);
    }
  };

  const label = () => {
    if (direction === "forward" || direction === "path") {
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
      handleClick={() => handleRouting(direction)}
      variant={label()}
    />
  );
};

export default RoutingButton;
