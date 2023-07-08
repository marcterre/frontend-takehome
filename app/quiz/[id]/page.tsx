"use client";
import { QuizDisplay } from "@/components/Layout";
import { useParams } from "next/navigation";

export const Quiz = () => {
  const params = useParams();
  const { id } = params;

  return (
    <main>
      <QuizDisplay id={id} />
    </main>
  );
};

export default Quiz;
