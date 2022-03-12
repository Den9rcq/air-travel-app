import React from "react"
import Filter from "./Filter"
import Sort from "./Sort"
import ByPrice from "./ByPrice"
import AirlineSorting from "./AirlineSorting"

const Aside = () => {
  return (
    <>
      <Sort />
      <Filter />
      <ByPrice />
      <AirlineSorting />
    </>
  )
}

export default Aside
