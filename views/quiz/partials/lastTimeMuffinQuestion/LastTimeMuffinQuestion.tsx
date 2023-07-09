import { TextInput } from "@/components/Inputs";
import { useParams } from "next/navigation";

export const LastTimeMuffinQuestion = () => {
  const params = useParams();
  const { id } = params;

  // const maxDate = new Date().toISOString().split("T")[0];
  return <TextInput questionId={id} type="date" />;
};

export default LastTimeMuffinQuestion;
