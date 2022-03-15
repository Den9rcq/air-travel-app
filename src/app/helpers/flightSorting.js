import { getTravelTime } from "./getTravelTime"

export const flightSorting = (flights, sortStatus) => {

  switch (sortStatus) {
  case "ascending":
    return [...flights]
  case "descending":
    return [...flights].sort((a, b) => b.price - a.price)
  case "time":
    return [...flights].sort((a, b) => (
      (getTravelTime(a.flightBack.arrivalDate, a.flightBack.departureDate) + getTravelTime(a.flightThere.arrivalDate, a.flightThere.departureDate)) -
        (getTravelTime(b.flightBack.arrivalDate, b.flightBack.departureDate) + getTravelTime(b.flightThere.arrivalDate, b.flightThere.departureDate))
    ))
  default:
    return flights
  }
}

