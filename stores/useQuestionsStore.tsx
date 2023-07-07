import { create } from "zustand";

type QuestionsStore = {
  quiz: {
    question: string;
    answer?: string;
    id: string;
    element?: JSX.Element;
  }[];
  setAnswers: (answer: string) => void;
};

const initialState = {
  quiz: [
    {
      question: "",
      id: "1",
      element: <></>,
    },
    {
      question: "",
      id: "2",
      element: <></>,
    },
    {
      question: "",
      id: "101",
      element: <></>,
    },
    {
      question: "",
      id: "102",
      element: <></>,
    },
    {
      question: "",
      answer: "",
      id: "201",
      element: <></>,
    },
    {
      question: "",
      answer: "",
      id: "202",
      element: <></>,
    },
  ],
};

const useQuestionsStore = create<QuestionsStore>((set) => ({
  ...initialState,

  setAnswers: (answer: string) => set((state) => ({ ...state, answer })),
}));

export default useQuestionsStore;
