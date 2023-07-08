"use client";
import useQuestionsStore from "@/stores/useQuestionsStore";
import handleQuizPath from "@/helpers/handleQuizPath";

export const Result = () => {
  const { questions } = useQuestionsStore();

  const getLastMuffinMessage = () => {
    const dateAnswer = questions[1].answer;
    const numberAnswer = questions[2].answer;

    const lastMuffinDate = questions[0].answer;

    if (handleQuizPath(dateAnswer, numberAnswer)) {
      return `Seems like you ate a Muffin on ${lastMuffinDate}, this was like yesterday!`;
    } else {
      return `Seems like you ate a Muffin on ${lastMuffinDate}, that's a really long time ago!`;
    }
  };

  const getMuffinLikeabilityMessage = () => {
    const muffinLikeability = +questions[1].answer!;

    if (muffinLikeability > 5) {
      return "So you like muffins. Good for you!";
    } else {
      const reason = questions[2].answer
        ? `I understand that you said "${questions[2].answer}"`
        : "";
      return `So you don't like muffins... My bad. ${reason}`;
    }
  };

  const getColorMessage = () => {
    const favoriteColor = questions[3].answer;

    if (favoriteColor) {
      return `But I see your favorite color is ${favoriteColor}, why don't you consider eating?`;
    } else {
      return "";
    }
  };

  const getBakeMessage = () => {
    const likeToBake = questions[5].answer === "yes";
    const favoriteFruit = questions[4].answer;

    if (likeToBake && favoriteFruit) {
      return `Since you also like to bake and your favorite fruit is ${favoriteFruit}, why don't you bake a ${favoriteFruit} muffin?`;
    } else if (!likeToBake && favoriteFruit) {
      return `Sad that you don't like to bake. But don't worry, you should go and buy a ${favoriteFruit} muffin!`;
    } else {
      return "";
    }
  };

  const resultMessage = `${getLastMuffinMessage()} ${getMuffinLikeabilityMessage()} ${getColorMessage()} ${getBakeMessage()}`;

  return <div>{resultMessage}</div>;
};

export default Result;
