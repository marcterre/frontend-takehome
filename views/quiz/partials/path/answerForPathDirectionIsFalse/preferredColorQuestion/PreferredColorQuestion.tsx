"use client";
import { SelectorButton } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useParams } from "next/navigation";
import { useState } from "react";

export const PreferredColorQuestion = () => {
  const params = useParams();
  const { slug } = params;

  const { getAnswer } = useQuestionsStore();
  const selectedColor = getAnswer(slug);

  const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Orange", value: "orange" },
    { label: "Purple", value: "purple" },
    { label: "Pink", value: "pink" },
    { label: "White", value: "white" },
  ];

  console.log("selectedColor", selectedColor);

  return (
    <div className="preferred-color-wrapper">
      <SelectorButton
        optionsValue={colors}
        id={slug}
        variant="preferred-color-selectors"
        active={selectedColor}
      />
    </div>
  );
};

export default PreferredColorQuestion;
