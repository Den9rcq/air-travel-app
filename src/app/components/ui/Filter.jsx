import React from "react"

const Filter = () => {
  return (
    <fieldset>
      <legend>Фильтровать</legend>
      <ul>
        <li>
          <label>
            <input type="checkbox" name="oneChange"/>
            - 1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" name="nonStop"/>
            - без пересадок
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default Filter
