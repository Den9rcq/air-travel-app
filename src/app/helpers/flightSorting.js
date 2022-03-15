export const flightSorting = (flights, sortStatus) => {

  switch (sortStatus) {
  case "ascending":
    return [...flights]
  case "descending":
    return [...flights].sort((a, b) => b.price - a.price)
  case "time":
    return [...flights].sort((a, b) => (a.flightBack.travelDuration + a.flightThere.travelDuration) - (b.flightBack.travelDuration + b.flightThere.travelDuration))
  default:
    return flights
  }
}
