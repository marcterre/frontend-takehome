import { create } from "zustand";

type QuestionsStore = {
  quiz: {
    question: string;
    answer: string;
    id: string;
    path?: number;
    element?: JSX.Element;
  }[];
  setAnswers: (answer: string) => void;
  getQuestionId: (id: string) => string;
  getCurrentQuestion: (questionId: string) => {
    question: string | undefined;
  };
};

const initialState = {
  quiz: [
    {
      question: "When is your next free time?",
      answer: "",
      id: "1",
      element: <></>,
    },
    {
      question: "How active should your activity be?",
      answer: "",
      id: "2",
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      answer: "",
      id: "101",
      path: 1,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      answer: "",
      id: "102",
      path: 1,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      answer: "",
      id: "201",
      path: 2,
      element: <></>,
    },
    {
      question: "Do you have friends who want to join you?",
      answer: "",
      id: "202",
      path: 2,
      element: <></>,
    },
  ],
};

const useQuestionsStore = create<QuestionsStore>((set) => ({
  ...initialState,

  setAnswers: (answer: string) => set((state) => ({ ...state, answer })),

  getQuestionId: (id: string) => {
    const question = initialState.quiz.find((q) => q.id === id);
    return question ? question.id : "";
  },

  getCurrentQuestion: (questionId: string) => {
    const sectionQuestion = initialState.quiz.find((q) => q.id === questionId);

    return {
      question: sectionQuestion?.question,
    };
  },
}));

export default useQuestionsStore;
