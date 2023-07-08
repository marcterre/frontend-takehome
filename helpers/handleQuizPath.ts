export const handleQuizPath = (dateAnswer?: string, numberAnswer?: string) => {
  const currentDate = new Date();
  const enteredDate = new Date(dateAnswer ?? "");

  const dateIsNotWithin30Days =
    (currentDate.getTime() - enteredDate.getTime()) / (1000 * 3600 * 24) > 30;

  const numberIsLessThan5 = Number(numberAnswer) < 5;

  if (
    (numberIsLessThan5 && dateIsNotWithin30Days) ||
    (numberIsLessThan5 && !dateIsNotWithin30Days)
  ) {
    return false;
  } else {
    return true;
  }
};

export default handleQuizPath;
