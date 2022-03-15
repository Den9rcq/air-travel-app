import { getTravelTime } from "./getTravelTime"

export const flightSorting = (flights, sortStatus) => {

  switch (sortStatus) {
  case "ascending":
    return [...flights]
  case "descending":
    return [...flights].sort((a, b) => b.price - a.price)
  case "time":
    return [...flights].sort((a, b) => {
      const totalFlightThere = (item) => getTravelTime(item.flightThere.arrivalDate, item.flightThere.departureDate)
      const totalFlightBack = (item) => getTravelTime(item.flightBack.arrivalDate, item.flightBack.departureDate)

      return (totalFlightBack(a) + totalFlightThere(a)) - (totalFlightBack(b) + totalFlightThere(b))
    })
  default:
    return [...flights]
  }
}

