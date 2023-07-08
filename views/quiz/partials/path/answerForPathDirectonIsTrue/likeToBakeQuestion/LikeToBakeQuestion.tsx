import { Checkbox } from "@/components/Inputs";
import { useParams } from "next/navigation";

export const LikeToBakeQuestion = () => {
  const params = useParams();
  const { slug } = params;

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return <Checkbox id={slug} options={options} />;
};
