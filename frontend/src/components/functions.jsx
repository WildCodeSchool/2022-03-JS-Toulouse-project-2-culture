export function dateJJMMConverter(stringDate) {
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
export function filterByDate(array, date) {
  return array.filter(
    (event) =>
      date.toLocaleDateString("en-gb", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }) >=
        new Date(event.fields.date_debut).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        }) &&
      date.toLocaleDateString("en-gb", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      }) <=
        new Date(event.fields.date_fin).toLocaleDateString("en-gb", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
  );
}
export function filterByLocation(array, location) {
  return array.filter((event) => event.commune === location);
}
