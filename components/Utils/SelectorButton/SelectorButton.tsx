"use client";
import { Button } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useState } from "react";

type SelectorButtonProps = {
  optionsValue: { label: string; value: string }[];
  id: string;
  variant?: string;
  active?: string;
  style?: React.CSSProperties;
};

export const SelectorButton = (props: SelectorButtonProps) => {
  const { optionsValue, id, variant, active } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const { setAnswer } = useQuestionsStore();

  const handleColorSelection = (value: string) => {
    setSelectedValue(value);
    setAnswer(id, value);
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
            disabled={value === selectedValue}
            type="button"
            variant={`${variant} ${value === selectedValue ? active : ""}`}
          />
        );
      })}
    </>
  );
};

export default SelectorButton;
