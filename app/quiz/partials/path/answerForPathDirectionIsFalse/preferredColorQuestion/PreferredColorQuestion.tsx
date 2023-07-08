"use client";
import { Button } from "@/components/Inputs";
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

  const handleColorSelection = (color: string) => {
    setSelectedColor(color);
    setAnswer(slug, color);
  };

  console.log("selectedColor", selectedColor);

  return (
    <>
      {colors.map((color, index) => (
        <Button
          key={index}
          label={color}
          handleClick={() => handleColorSelection(color)}
          active={color === selectedColor}
        />
      ))}
      ;
    </>
  );
};

export default PreferredColorQuestion;
