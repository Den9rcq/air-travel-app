import React, { useEffect } from "react"
import Card from "./Card"
import { useDispatch } from "react-redux"
import { fetchFlights } from "../../store/flightsSlice"

const Body = () => {
  // const flights = useSelector(getFlights)
  const dispatch = useDispatch()
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
