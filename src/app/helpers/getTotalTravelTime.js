import { zero } from "./getZero"

export const getTotalTravelTime = (departure, arrival) => {
  const travelTime = Date.parse(arrival) - Date.parse(departure)
  const hours = zero(Math.floor((travelTime / (1000 * 60 * 60)) % 24))
  const minutes = zero(Math.floor((travelTime / (1000 * 60)) % 60))

  return {
    hours,
    minutes
  }
}
