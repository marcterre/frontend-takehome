import { EntryQuestion } from "@/quiz/partials/entryQuestion/EntryQuestion";
import { SecondQuestion } from "@/quiz/partials/secondQuestion/SecondQuestion";
import { create } from "zustand";

type Quiz = {
  question: string;
  answer?: string;
  id: string;
  path?: number;
  element?: JSX.Element;
};

type QuestionsStore = {
  quiz: Quiz[];
  setAnswer: (questionId: string, answer: string) => void;
};

const initialState = {
  quiz: [
    {
      question: "When is your next free time?",
      id: "1",
      element: <EntryQuestion />,
    },
    {
      question: "How active should your activity be?",
      id: "2",
      element: <SecondQuestion />,
    },
    {
      question: "Do you have friends who want to join you?",
      id: "101",
      path: 1,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      id: "102",
      path: 1,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      id: "201",
      path: 2,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      id: "202",
      path: 2,
      element: <></>,
    },
  ],
};

const useQuestionsStore = create<QuestionsStore>((set) => ({
  ...initialState,

  setAnswer: (questionId: string, answer: string) =>
    set((state) => ({
      quiz: state.quiz.map((question) =>
        question.id === questionId ? { ...question, answer } : question
      ),
    })),
}));

export default useQuestionsStore;
