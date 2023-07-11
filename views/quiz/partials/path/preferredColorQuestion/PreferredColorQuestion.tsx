"use client";
import { SelectorButton } from "@/components/Utils/SelectorButton";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useParams } from "next/navigation";

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
