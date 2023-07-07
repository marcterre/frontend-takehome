"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/Input/Button/Button";
import useQuestionsStore from "stores/useQuestionsStore";

type Direction = "back" | "forward" | "home" | "start";

type RoutingButtonProps = {
  direction: Direction;
  route?: string;
  id?: string;
};

export const RoutingButton = (props: RoutingButtonProps) => {
  const { direction, route, id } = props;
  const router = useRouter();

  const handleRouting = (direction: Direction, route?: string) => {
    if (direction === "forward") {
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
      handleClick={() => handleRouting(direction, route)}
      variant={label()}
    />
  );
};

export default RoutingButton;
