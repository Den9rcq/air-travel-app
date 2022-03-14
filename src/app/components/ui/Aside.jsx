import React, { useEffect } from "react"
import Filter from "./Filter"
import Sort from "./Sort"
import ByPrice from "./ByPrice"
import AirlineSorting from "./AirlineSorting"
// import { useDispatch } from "react-redux"
// import { fetchAirlines } from "../../store/airlinesSlice"

const Aside = () => {

  // const dispatch = useDispatch()

  useEffect(() => {
    // dispatch(fetchAirlines())
  }, [])

  return (
    <div className="aside">
      <Sort />
      <Filter />
      <ByPrice />
      <AirlineSorting />
    </div>
  )
}

export default Aside
