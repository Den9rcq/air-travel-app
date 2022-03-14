import React, { useState } from "react"

const Filter = () => {

  const [checked, setChecked] = useState({
    oneChange: false,
    nonStop: false
  })

  const changeCheckbox = ({ target }) => {
    setChecked(prevState => {
      return {
        ...prevState,
        [target.name]: !prevState[target.name]
      }
    })
  }

  return (
    <fieldset>
      <legend>Фильтровать</legend>
      <ul>
        <li>
          <label>
            <input
              type="checkbox"
              name="oneChange"
              onChange={(e) => changeCheckbox(e)}
              checked={checked.oneChange}
            />
            - 1 пересадка
          </label>
        </li>
        <li>
          <label>
            <input
              type="checkbox"
              name="nonStop"
              onChange={(e) => changeCheckbox(e)}
              checked={checked.nonStop}
            />
            - без пересадок
          </label>
        </li>
      </ul>
    </fieldset>
  )
}

export default Filter
