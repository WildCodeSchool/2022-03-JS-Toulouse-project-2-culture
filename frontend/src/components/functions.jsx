export function dateJJMMConverter(stringDate) {
  return new Date(stringDate).toLocaleDateString("en-gb", {
    month: "numeric",
    day: "numeric",
  });
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
export function filterByLocation(array, date, location) {
  if (location)
    return filterByDate(array, date).filter(
      (event) => event.fields.commune === location
    );
  return filterByDate(array, date);
}
