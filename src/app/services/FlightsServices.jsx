import { useHttp } from "../hooks/useHttp"
import { transformData } from "../helpers/transformData"
import { sortingAirlinesByBestPrice } from "../helpers/sortingAirlinesByBestPrice"

const useFlightsServices = () => {
  const _apiBase = "http://localhost:3001/result/"
  const { request } = useHttp()

  const getAllFlights = async () => {
    const { flights } = await request(_apiBase)
    return flights.map(flight => {
      return {
        id: flight.flightToken,
        price: flight.flight.price.passengerPrices[0].total.amount,
        flightThere: transformData(flight.flight.legs[0].segments),
        flightBack: transformData(flight.flight.legs[1].segments),
        carrier: flight.flight.carrier.caption
      }
    })
  }

  const getAllAirlines = async () => {
    const { bestPrices } = await request(_apiBase)
    return sortingAirlinesByBestPrice(bestPrices.ONE_CONNECTION.bestFlights)
  }

  return { getAllFlights, getAllAirlines }
}

export default useFlightsServices
