import { TextInput } from "@/components/Inputs";
import { useParams } from "next/navigation";

export const MuffinLikeabilityQuestion = () => {
  const params = useParams();
  const { id } = params;

  return <TextInput type="number" questionId={id} min={0} max={10} />;
};

export default MuffinLikeabilityQuestion;
