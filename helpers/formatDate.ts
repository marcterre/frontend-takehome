export const formatDate = (dateString?: string, method?: string) => {
  if (!dateString) {
    return "";
  }

  const [year, month, day] = dateString.split("-");
  const formattedDateGerman = `${day}.${month}.${year}`;
  const formattedDateEnglish = `${month}/${day}/${year}`;

  if (method === "german") return formattedDateGerman;
  if (method === "english") return formattedDateEnglish;
};

export default formatDate;
