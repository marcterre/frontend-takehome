import { TextInput } from "@/components/Inputs";
import { useParams } from "next/navigation";

export const FavoriteFruitQuestion = () => {
  const params = useParams();
  const { slug } = params;
  return <TextInput type="text" questionId={slug} />;
};

export default FavoriteFruitQuestion;
