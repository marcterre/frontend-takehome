"use client";
import { QuizDisplay } from "@/components";
import { useParams } from "next/navigation";

const Quiz = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <QuizDisplay id={id} />
    </>
  );
};

export default Quiz;
