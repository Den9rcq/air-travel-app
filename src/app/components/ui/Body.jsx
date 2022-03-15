import React, { useEffect } from "react"
import Card from "./Card"
import { useDispatch, useSelector } from "react-redux"
import { fetchFlights, getCountFlights, setCountFlights } from "../../store/flightsSlice"

const Body = () => {
  const flights = useSelector(getCountFlights)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchFlights())
  }, [])
  return (
    <div>
      <ul>
        {flights.map(item => <Card key={item.id} {...item}/>)}
      </ul>
      <button onClick={() => dispatch(setCountFlights())} className="btn-more">Показать ещё</button>
    </div>
  )
}

export default Body
