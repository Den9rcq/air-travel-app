import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMaxPriceFlight, sortByPriceChanged } from "../../store/flightsSlice"
import MyInput from "../common/MyInput"

const ByPrice = () => {

  const maxPrice = useSelector(getMaxPriceFlight)
  const dispatch = useDispatch()

  const [range, setRange] = useState({
    min: "",
    max: ""
  })

  useEffect(() => {
    dispatch(sortByPriceChanged(range))
  }, [range])

  const changeRange = ({ target }) => {
    setRange(prevState => {
      if (target.value >= maxPrice) {
        return {
          ...prevState,
          max: maxPrice
        }
      } else if (target.value <= 0) {
        return {
          max: "",
          min: ""
        }
      } else if (prevState.max === "" && prevState.min !== "") {
        return {
          min: Number(target.value),
          max: maxPrice
        }
      } else {
        return {
          ...prevState,
          [target.name]: Number(target.value)
        }
      }
    })
  }

  return (
    <fieldset>
      <legend>Цена</legend>
      <ul>
        <MyInput
          type="number"
          name="min"
          value={range.min}
          label="От"
          min={0}
          placeholder="0"
          handleChange={changeRange}
        />
        <MyInput
          type="number"
          name="max"
          value={range.max}
          label="До"
          max={maxPrice}
          placeholder={maxPrice}
          handleChange={changeRange}
        />
      </ul>
    </fieldset>
  )
}

export default ByPrice
