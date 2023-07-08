"use client";
import { QuizDisplay } from "@/components/Layout";
import { useParams } from "next/navigation";

export const Path = () => {
  const params = useParams();
  const { slug } = params;
  return <QuizDisplay id={slug} />;
};

export default Path;
