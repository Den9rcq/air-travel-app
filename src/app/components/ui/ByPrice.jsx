import React from "react"

const ByPrice = () => {
  return (
    <fieldset>
      <legend>Цена</legend>
      <ul>
        <li>
          <label>
            От
            <input type="number" name="rangeRight" value="0"/>
          </label>
        </li>
        <li>
          <label>
            До
            <input type="number" name="rangeLeft" value="1000000"/>
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default ByPrice
