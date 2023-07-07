import { TextInput } from "components/Input/TextInput/TextInput";
import { useParams } from "next/navigation";

export const LastTimeMuffinQuestion = () => {
  const params = useParams();
  const { id } = params;

  return <TextInput questionId={id} type="date" />;
};
