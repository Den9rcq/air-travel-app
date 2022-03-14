import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMaxPriceFlight, sortByPriceChanged } from "../../store/flightsSlice"

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
          ...prevState,
          min: 0
        }
      } else if (prevState.max === "") {
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
        <li>
          <label>
            От
            <input
              type="number"
              name="min"
              value={range.min}
              min={0}
              placeholder="0"
              onChange={(e) => changeRange(e)}
            />
          </label>
        </li>
        <li>
          <label>
            До
            <input
              type="number"
              name="max"
              placeholder={maxPrice}
              value={range.max}
              max={maxPrice}
              onChange={(e) => changeRange(e)}
            />
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default ByPrice
