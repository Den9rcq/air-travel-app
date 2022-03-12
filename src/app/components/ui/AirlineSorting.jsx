import React from "react"

const AirlineSorting = () => {
  return (
    <fieldset>
      <legend>Авиакомпании</legend>
      <ul>
        <li>
          <label>
            <input type="checkbox" name="name" />
            - (название компании) от (минимальная цена билета)
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default AirlineSorting
