import React, { useEffect } from "react"
import Aside from "./ui/Aside"
import Body from "./ui/Body"
import { useHttp } from "../hooks/useHttp"

const App = () => {
  const { request } = useHttp()

  useEffect(async () => {
    const { flights } = await request("http://localhost:3001/result")
    const data = flights.map(flight => {
      return {
        id: flight.flightToken,
        legs: flight.flight.legs,
        flight: flight.flight
      }
    })
    console.log(data)
  }, [])

  return (
    <div className="container">
      <Aside />
      <Body />
    </div>
  )
}

export default App
