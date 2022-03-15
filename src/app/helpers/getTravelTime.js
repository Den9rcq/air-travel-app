export const getTravelTime = (arrival, departure) => {
  return Date.parse(arrival) - Date.parse(departure)
}
