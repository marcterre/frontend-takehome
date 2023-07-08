"use client";
import { Button, SelectorButton } from "@/components";
import useQuestionsStore from "@/stores/useQuestionsStore";
import { useParams } from "next/navigation";
import { useState } from "react";

export const PreferredColorQuestion = () => {
  const params = useParams();
  const { slug } = params;

  const colors = [
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Orange", value: "orange" },
    { label: "Purple", value: "purple" },
    { label: "Pink", value: "pink" },
    { label: "White", value: "white" },
  ];

  return (
    <>
      <SelectorButton optionsValue={colors} id={slug} />;
    </>
  );
};

export default PreferredColorQuestion;
