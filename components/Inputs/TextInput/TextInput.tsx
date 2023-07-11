import useQuestionsStore from "@/stores/useQuestionsStore";
import "./TextInput.styles.scss";

type TextInputProps = {
  type?: string;
  label?: string;
  value?: string;
  variant?: string;
  questionId: string;
  max?: string | number;
  min?: string | number;
  maxLength?: number;
  pattern?: string;
};

export const TextInput = (props: TextInputProps) => {
  const { type, label, variant, questionId, max, min, maxLength, pattern } =
    props;

  const { setAnswer, getAnswer } = useQuestionsStore();
  const answer = getAnswer(questionId);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = event.target.value;

    setAnswer(questionId, newAnswer);
  };

  return (
    <>
      <label htmlFor={label} className={`label label--${variant}`}></label>
      <input
        className={`input input--${variant}`}
        type={type}
        onChange={handleChange}
        defaultValue={answer}
        form="form"
        max={max}
        min={min}
        required={true}
        id={label}
        name={label}
        maxLength={maxLength}
        pattern={pattern}
      />
    </>
  );
};

export default TextInput;
