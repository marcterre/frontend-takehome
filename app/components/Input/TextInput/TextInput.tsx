import "./TextInput.styles.css";

type TextInputProps = {
  type: string;
  label?: string;
  defaultValue?: string;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = (props: TextInputProps) => {
  const { type, label, defaultValue, handleChange } = props;
  return (
    <>
      <label>{label && label}</label>
      <input type={type} defaultValue={defaultValue} onChange={handleChange} />
    </>
  );
};
