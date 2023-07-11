export const isDateWithin30Days = (dateAnswer?: string) => {
  const currentDate = new Date();
  const enteredDate = new Date(dateAnswer ?? "");

  const daysDifference =
    (currentDate.getTime() - enteredDate.getTime()) / (1000 * 3600 * 24);
  if (daysDifference < 30) return true;
  if (daysDifference > 30) return false;
};

export default isDateWithin30Days;
