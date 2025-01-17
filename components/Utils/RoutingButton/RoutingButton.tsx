"use client";
import { usePathname, useRouter } from "next/navigation";
import { useQuestionsStore } from "@/stores/useQuestionsStore";
import { Button } from "@/components";
import handleQuizPath from "@/helpers/handleQuizPath";
import IconBack from "../../../public/arrow-back.svg";
import IconForward from "../../../public/arrow-right.svg";
import Image from "next/image";
import axios from "axios";

type Direction = "back" | "forward" | "home" | "start" | "path" | "result";

type RoutingButtonProps = {
  direction: Direction;
  id?: string;
  type: "button" | "submit" | "reset";
  form?: string;
  style?: React.CSSProperties;
  handleClick?: () => void;
  disabled?: boolean;
};

export const RoutingButton = (props: RoutingButtonProps) => {
  const { id, direction, type, form, style, handleClick, disabled } = props;
  const router = useRouter();
  const pathname = usePathname();

  const { getAnswer, questions, removeStoredAnswer } = useQuestionsStore();

  const answer = getAnswer(id || "");

  const dateAnswer = getAnswer("1");
  const numberAnswer = getAnswer("2");

  const answerForPathDirection = handleQuizPath(dateAnswer, numberAnswer);

  const removeResult = () => {
    axios
      .patch(`http://localhost:3030/result`, {
        message: null,
        id: null,
      })
      .catch((error) => {
        console.log(`Error deleting result for questions: `, error);
      });
  };

  const removeAllAnswers = () => {
    questions.map((question) =>
      axios
        .patch(`http://localhost:3030/questions/${question.id}`, {
          answer: null,
        })
        .catch((error) => {
          console.log(
            `Error deleting answer for question ${question.id}:`,
            error
          );
        })
    );
  };

  const backArrow = (
    <Image
      className="back-icon"
      src={IconBack}
      alt="back arrow"
      width={25}
      height={25}
    />
  );
  const forwardArrow = (
    <Image
      className="forward-icon"
      src={IconForward}
      alt="back arrow"
      width={25}
      height={25}
    />
  );

  const handleRouting = (direction: Direction) => {
    if (direction === "forward") {
      handleClick && handleClick();
      setTimeout(() => {
        if (pathname === `/quiz/2/path/${id}`) {
          return router.push(`/quiz/2/path/${id && +id + 1}`);
        } else {
          return router.push(`/quiz/${id && +id + 1}`);
        }
      }, 500);
    }
    if (direction === "back") {
      return router.back();
    }
    if (direction === "home") {
      removeResult();
      removeAllAnswers();
      removeStoredAnswer();
      return router.push("/");
    }
    if (direction === "start") {
      return router.push("/quiz/1");
    }
    if (direction === "path") {
      handleClick && handleClick();
      setTimeout(() => {
        if (answerForPathDirection) return router.push(`/quiz/2/path/201`);
        if (!answerForPathDirection) return router.push(`/quiz/2/path/101`);
      }, 500);
    }
    if (direction === "result" && answer) {
      handleClick && handleClick();
      setTimeout(() => {
        return router.push(`${id}/result`);
      }, 500);
    }
  };

  const label = () => {
    if (direction === "forward" || direction === "path") {
      return forwardArrow;
    }
    if (direction === "back") {
      return backArrow;
    }
    if (direction === "home") {
      return "Home";
    }
    if (direction === "start") {
      return "Start here to find out";
    }
    if (direction === "result") {
      return "See Result";
    }
  };

  return (
    <Button
      label={label()}
      handleClick={() => {
        handleRouting(direction);
      }}
      variant={direction}
      type={type}
      form={form}
      style={style}
      disabled={disabled}
    />
  );
};

export default RoutingButton;
