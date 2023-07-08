import useQuestionsStore from "@/stores/useQuestionsStore";
import "./TextInput.styles.css";

type TextInputProps = {
  type: string;
  label?: string;
  value?: string;
  variant?: string;
  questionId: string;
};

export const TextInput = (props: TextInputProps) => {
  const { type, label, variant, questionId } = props;

  const { setAnswer, getAnswer } = useQuestionsStore();
  const answer = getAnswer(questionId);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = event.target.value;

    setAnswer(questionId, newAnswer);
  };

  return (
    <>
      <label className={`label label--${variant}`}>{label && label}</label>
      <input
        className={`input input--${variant}`}
        type={type}
        onChange={handleChange}
        defaultValue={answer}
      />
    </>
  );
};

export default TextInput;
