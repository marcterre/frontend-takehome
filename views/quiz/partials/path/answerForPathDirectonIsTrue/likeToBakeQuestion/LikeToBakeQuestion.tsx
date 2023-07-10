import { SelectorButton } from "@/components";
import { useParams } from "next/navigation";

export const LikeToBakeQuestion = () => {
  const params = useParams();
  const { slug } = params;

  const options = [
    { label: "Yes", value: "yes" },
    { label: "No", value: "no" },
  ];

  return (
    <div className="like-to-bake-selectors">
      <SelectorButton
        id={slug}
        optionsValue={options}
        variant="like-to-bake-selectors"
        active="button--like-to-bake-selectors-active"
      />
    </div>
  );
};
