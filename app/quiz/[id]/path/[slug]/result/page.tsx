"use client";
import useQuestionsStore from "@/stores/useQuestionsStore";
import handleQuizPath from "@/helpers/handleQuizPath";
import isDateWithin30Days from "@/helpers/isDateWithin30Days";
import formatDate from "@/helpers/formatDate";
import RoutingButton from "@/components/Utils/RoutingButton/RoutingButton";
import "./result.styles.scss";

export const Result = () => {
  const { questions } = useQuestionsStore();

  const getLastMuffinMessage = () => {
    const dateAnswer = questions[1].answer;
    const numberAnswer = questions[2].answer;

    const lastMuffinDate = questions[0].answer;
    const lastMuffinDateFormatted = formatDate(questions[0].answer, "german");

    if (
      !handleQuizPath(dateAnswer, numberAnswer) &&
      isDateWithin30Days(lastMuffinDate)
    ) {
      return `Seems like you ate a Muffin on ${lastMuffinDateFormatted}, this was like yesterday!`;
    } else {
      return `Seems like you ate a Muffin on ${lastMuffinDateFormatted}, that's a really long time ago!`;
    }
  };

  const getMuffinLikeabilityMessage = () => {
    const muffinLikeability = +questions[1].answer!;

    if (muffinLikeability > 5) {
      return "So you like muffins. Good for you!";
    } else {
      const reason =
        questions[2].answer &&
        `I understand that you said "${questions[2].answer}".`;
      return `So you don't like muffins... My bad. ${reason}`;
    }
  };

  const getColorMessage = () => {
    const favoriteColor = questions[3].answer;

    const choosenFavoriteColor = () => {
      switch (favoriteColor) {
        case "red":
          return "Apples";
        case "green":
          return "Kiwis";
        case "blue":
          return "Blueberries";
        case "yellow":
          return "Bananas";
        case "orange":
          return "Oranges";
        case "purple":
          return "Plums";
        case "pink":
          return "Raspberries";
        default:
          return "";
      }
    };

    console.log(choosenFavoriteColor());

    if (favoriteColor) {
      return `But I see your favorite color is ${favoriteColor}, why don't you consider eating ${choosenFavoriteColor()}?`;
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

  return (
    <main className="result-page-main">
      <h1 className="result-page-main-title">Your Result:</h1>
      {questions[0].answer ? (
        <p className="result-page-main-message">{resultMessage}</p>
      ) : (
        <p className="result-page-main-message">
          Oops! There are no answers available. If you want to know wheter you
          should eat a muffin or not click the button below and start the quiz.
        </p>
      )}
      <RoutingButton direction={"home"} type={"button"} />
    </main>
  );
};

export default Result;
