import isDateWithin30Days from "./isDateWithin30Days";

export const handleQuizPath = (dateAnswer?: string, numberAnswer?: string) => {
  const dateIsWithin30Days = isDateWithin30Days(dateAnswer);
  const numberIsLessThan5 = Number(numberAnswer) < 5;

  if (
    (numberIsLessThan5 && !dateIsWithin30Days) ||
    (numberIsLessThan5 && dateIsWithin30Days)
  ) {
    return false;
  } else {
    return true;
  }
};

export default handleQuizPath;
