import { TextInput } from "@/components/Input/TextInput/TextInput";
import useQuestionsStore from "@/stores/useQuestionsStore";

export const EntryQuestion = () => {
  const { quiz } = useQuestionsStore();
  const answer = quiz[0].answer;

  return (
    <div>
      <TextInput
        questionId="1"
        type="date"
        variant="entry-question"
        value={answer}
      />
    </div>
  );
};
