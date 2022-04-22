function dateJJMMConverter(stringDate) {
  const dayNumber =
    new Date(stringDate).getUTCDate() < 10
      ? `0${new Date(stringDate).getUTCDate()}`
      : new Date(stringDate).getUTCDate();
  const monthNumber =
    new Date(stringDate).getUTCMonth() < 10
      ? `0${new Date(stringDate).getUTCMonth()}`
      : new Date(stringDate).getUTCMonth();

  return `${dayNumber}/${monthNumber}`;
}
export default dateJJMMConverter;
