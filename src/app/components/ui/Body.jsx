import React, { useEffect } from "react"
import Card from "./Card"
import { useDispatch, useSelector } from "react-redux"
import { fetchFlights, getFilterFlights } from "../../store/flightsSlice"

const Body = () => {
  const flights = useSelector(getFilterFlights)
  const dispatch = useDispatch()
  console.log(flights)
  useEffect(() => {
    dispatch(fetchFlights())
  }, [])
  return (
    <div>
      <ul>
        <Card/>
      </ul>
      <button className="btn-more">Показать ещё</button>
    </div>
  )
}

export default Body
