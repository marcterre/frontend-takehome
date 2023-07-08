import { SelectorButton } from "@/components";
import { useParams } from "next/navigation";

export const LikeToBakeQuestion = () => {
  const params = useParams();
  const { slug } = params;

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return <SelectorButton id={slug} optionsValue={options} />;
};
