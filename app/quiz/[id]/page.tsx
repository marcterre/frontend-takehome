"use client";
import { QuizDisplay } from "@/components/Layout";
import { useParams } from "next/navigation";

export const Quiz = () => {
  const params = useParams();
  const { id } = params;

  return (
    <>
      <QuizDisplay id={id} />
    </>
  );
};

export default Quiz;
