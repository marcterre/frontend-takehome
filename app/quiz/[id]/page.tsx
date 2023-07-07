"use client";

import RoutingButton from "@/components/Utils/RoutingButton";
import { useParams } from "next/navigation";

export const Quiz = () => {
  const { id } = useParams();
  return (
    <>
      <h2>
        Question
        {id}
      </h2>
      <RoutingButton direction="back" />
      {+id < 4 && <RoutingButton direction="forward" id={id} />}
      <RoutingButton direction="home" />
    </>
  );
};

export default Quiz;
