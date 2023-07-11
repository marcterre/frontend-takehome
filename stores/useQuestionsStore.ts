import { create } from "zustand";

type Quiz = {
  question: string;
  note?: string;
  answer?: string;
  id: string;
  type?: string;
};

type QuestionsStore = {
  questions: Quiz[];
  setQuestions: (questions: Quiz[]) => void;
  setAnswer: (questionId: string, answer: string) => void;
  getAnswer: (questionId: string) => string | undefined;
  getQuestion: (questionId: string) => Quiz | undefined;
  removeStoredAnswer: () => void;
};

const initialState = {
  questions: [],
};

export const useQuestionsStore = create<QuestionsStore>((set, get) => ({
  ...initialState,

  setQuestions: (questions: Quiz[]) => set({ questions }),

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
  removeStoredAnswer: () =>
    set((state) => ({
      questions: state.questions.map((question) => ({
        ...question,
        answer: "",
      })),
    })),
}));

export default useQuestionsStore;
