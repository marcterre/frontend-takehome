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
  const { type, label, value, variant, questionId } = props;

  const { setAnswer, quiz } = useQuestionsStore();
  const answer = quiz[0].answer;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = event.target.value;
    const parsedDate = Date.parse(newAnswer);

    if (!isNaN(parsedDate)) {
      const date = new Date(parsedDate);
      const weekday = date.toLocaleDateString(undefined, { weekday: "long" });
      setAnswer(questionId, `${newAnswer} (${weekday})`);
    } else {
      setAnswer(questionId, newAnswer);
    }
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
