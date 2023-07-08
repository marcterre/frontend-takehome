import { Button } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useState } from "react";

type SelectorButtonProps = {
  selectorValues: string[];
  id: string;
};

export const SelectorButton = (props: SelectorButtonProps) => {
  const { selectorValues, id } = props;
  const [selectedValue, setSelectedValue] = useState("");
  const { setAnswer } = useQuestionsStore();

  const handleColorSelection = (color: string) => {
    setSelectedValue(color);
    setAnswer(id, color);
  };
  return (
    <>
      {selectorValues.map((value, index) => (
        <Button
          key={index}
          label={value}
          handleClick={() => handleColorSelection(value)}
          active={value === selectedValue}
        />
      ))}
      ;
    </>
  );
};

export default SelectorButton;
