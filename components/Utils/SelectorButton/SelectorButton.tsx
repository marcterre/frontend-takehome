"use client";
import { Button } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useState } from "react";

type SelectorButtonProps = {
  optionsValue: { label: string; value: string }[];
  id: string;
};

export const SelectorButton = (props: SelectorButtonProps) => {
  const { optionsValue, id } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const { setAnswer } = useQuestionsStore();

  const handleColorSelection = (color: string) => {
    setSelectedValue(color);
    setAnswer(id, color);
  };
  return (
    <>
      {optionsValue.map((options, index) => {
        const { label, value } = options;
        return (
          <Button
            key={index}
            label={label}
            handleClick={() => handleColorSelection(value)}
            active={value === selectedValue}
            type="button"
          />
        );
      })}
    </>
  );
};

export default SelectorButton;
