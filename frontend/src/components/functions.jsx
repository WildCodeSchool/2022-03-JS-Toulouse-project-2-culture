function dateConverter(stringDate) {
  const dayNumber = new Date(stringDate).getUTCDate();
  const monthNumber = new Date(stringDate).getUTCMonth();
  return `${dayNumber}/${monthNumber}`;
}
export default dateConverter;
