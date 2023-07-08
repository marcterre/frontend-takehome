import React from "react";
import { TextInput } from "../TextInput/TextInput";

type CheckboxProps = {
  options: { label: string; value: string }[];
  id: string;
};

export const Checkbox = (props: CheckboxProps) => {
  const { options, id } = props;

  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <TextInput type="checkbox" value={option.value} questionId={id} />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
