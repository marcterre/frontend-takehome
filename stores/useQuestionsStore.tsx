import { FavoriteFruitQuestion } from "@/views/quiz/partials";
import { LastTimeMuffinQuestion } from "@/views/quiz/partials";
import { LikeToBakeQuestion } from "@/views/quiz/partials";
import { MuffinLikeabilityQuestion } from "@/views/quiz/partials";
import { PreferredColorQuestion } from "@/views/quiz/partials";
import { WhyMuffinsQuestion } from "@/views/quiz/partials";
import { create } from "zustand";

type Quiz = {
  question: string;
  note?: string;
  answer?: string;
  id: string;
  element?: JSX.Element;
};

type QuestionsStore = {
  questions: Quiz[];
  setAnswer: (questionId: string, answer: string) => void;
  getAnswer: (questionId: string) => string | undefined;
  getQuestion: (questionId: string) => Quiz | undefined;
};

const initialState = {
  questions: [
    {
      question: "When was the last time you ate a muffin?",
      id: "1",
      element: <LastTimeMuffinQuestion />,
    },
    {
      question: "How much do you like muffins?",
      note: "Choose from 1 to 10. (1 = 'don't like them', 10 = 'love them!')",
      id: "2",
      element: <MuffinLikeabilityQuestion />,
    },
    {
      question: "Why do you think you should eat a muffin?",
      id: "101",
      element: <WhyMuffinsQuestion />,
    },
    {
      question: "What is your preferred color?",
      id: "102",
      element: <PreferredColorQuestion />,
    },
    {
      question: "What is your favorite fruit?",
      id: "201",
      element: <FavoriteFruitQuestion />,
    },
    {
      question: "Do you like to bake?",
      id: "202",
      element: <LikeToBakeQuestion />,
    },
  ],
};

export const useQuestionsStore = create<QuestionsStore>((set, get) => ({
  ...initialState,

  setAnswer: (questionId: string, answer: string) =>
    set((state) => ({
      questions: state.questions.map((question) =>
        question.id === questionId ? { ...question, answer } : question
      ),
    })),

  getAnswer: (questionId: string) => {
    const question = get().questions.find(
      (question) => question.id === questionId
    );
    return question?.answer;
  },

  getQuestion: (questionId: string) => {
    const question = get().questions.find(
      (question) => question.id === questionId
    );
    return question;
  },
}));

export default useQuestionsStore;
