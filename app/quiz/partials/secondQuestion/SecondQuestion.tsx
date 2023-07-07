import { TextInput } from "@/components/Input/TextInput/TextInput";
import useQuestionsStore from "@/stores/useQuestionsStore";

export const SecondQuestion = () => {
  const { quiz } = useQuestionsStore();
  const id = quiz[1].id;
  const answer = quiz[1].answer;

  return <TextInput type="number" questionId={id} />;
};
