import { TextInput } from "components/Input/TextInput/TextInput";
import { useParams } from "next/navigation";

export const MuffinLikeabilityQuestion = () => {
  const params = useParams();
  const { id } = params;

  return <TextInput type="number" questionId={id} />;
};
