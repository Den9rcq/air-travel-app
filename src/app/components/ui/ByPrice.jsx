import React, { useState } from "react"

const ByPrice = () => {

  const [range, setRange] = useState({
    min: "",
    max: 100000
  })

  const changeRange = ({target}) => {
    setRange(prevState => {
      return {
        ...prevState,
        [target.name]: target.value
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
              value={range.max}
              onChange={(e) => changeRange(e)}
            />
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default ByPrice
