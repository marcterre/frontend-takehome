"use client";
import { Button, SelectorButton } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useParams } from "next/navigation";
import { useState } from "react";

export const PreferredColorQuestion = () => {
  const params = useParams();
  const { slug } = params;
  const [selectedColor, setSelectedColor] = useState("");
  const { setAnswer } = useQuestionsStore();

  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "white",
  ];

  return (
    <>
      <SelectorButton selectorValues={colors} id={slug} />;
    </>
  );
};

export default PreferredColorQuestion;
