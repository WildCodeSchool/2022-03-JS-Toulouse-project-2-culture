/**
 * It takes a string date, converts it to a date object, and then returns a string date in the format
 * of "day/month"
 * @returns A date in the format of "dd/mm"
 */
export function dateJJMMConverter(stringDate) {
  return new Date(stringDate).toLocaleDateString("en-gb", {
    month: "numeric",
    day: "numeric",
  });
}
/**
 * It filters an array of events by a given date
 * @returns An array of events that are happening on the date passed in.
 */
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
/**
 * It filters an array of events by date and location
 * @returns An array of events that match the date and location.
 */
export function filterByLocation(array, date, location, maplocation) {
  if (location)
    return filterByDate(array, date).filter((event) =>
      event?.fields?.commune?.toLowerCase().includes(location.toLowerCase())
    );
  if (maplocation) {
    const LatMax = maplocation.getNorthEast().lat;
    const LngMax = maplocation.getNorthEast().lng;
    const LatMin = maplocation.getSouthWest().lat;
    const LngMin = maplocation.getSouthWest().lng;
    return filterByDate(array, date).filter(
      (event) =>
        event.fields.geo_point_2d[0] < LatMax &&
        event.fields.geo_point_2d[0] > LatMin &&
        event.fields.geo_point_2d[1] < LngMax &&
        event.fields.geo_point_2d[1] > LngMin
    );
  }
  return filterByDate(array, date);
}
